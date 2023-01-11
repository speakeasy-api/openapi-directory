import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Availability {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getConsumerV1AvailabilityServiceIdStartDateEndDate - Returns a list of available times.
   *
   * Choose your search criteria carefully. Availability is an expensive call. If you search availability for all resources
   * then you should only do so for a single date. If you decide to search availability for multiple dates you should only do so
   * for a specific resource by specifying the optional resourceId parameter.<br /><br />
   * 
   * Start and End times are specified as military times e.g. 800 = 8:00am, 2230 = 10:30pm. 
   * You will only see availability within the boundary of your business start and end times.<br /><br />
   * 
   * 
   * dayAvailability will return day availablility for the number of days requested from the start date.<br /><br />
   * 
   * 
   * firstDayAvailable only works with day availability. If set to true it will look for the first day available within the range specified
   * by the dayAvailability parameter. The two parameters together can be a clever way to display availability for a week or month.
   * Tip - pass in the beginning of the week or month, and available times are displayed for the first available date if exists.<br /><br />
   * 
   * You should only specify the duration parameter if you let your customers choose the duration of the appointment. e.g. from a list.<br /><br />
   * 
   * 
   * The tz parameter allows you to select a suitable timezone for the customer to book in. Your app should be timezone aware if you 
   * use this option. The requested timezone is specified as an offset(plus or minus) from GMT time.<br /><br />
   * 
   * Availabity can be complex. We provided an endpoint help you troubleshoot:
   * /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable. 
   * This endpoint will show you all the blocks for a given date range. Available times are created from any unblocked time periods.<br /><br />
   * 
   * 
   * See more information at <a href="https://onsched.readme.io/docs/availability-overview">Availability Overview</a>
  **/
  getConsumerV1AvailabilityServiceIdStartDateEndDate(
    req: operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.availabilityViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getConsumerV1AvailabilityServiceIdStartDateEndDateDays - Returns a list of available days.
   *
   * This end point is used to show day level availability. For example if the business is closed, or there is a public holiday.
   * 
   * Day level availability is a good way to restrict your choices of dates in your app and improve usability.
  **/
  getConsumerV1AvailabilityServiceIdStartDateEndDateDays(
    req: operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/days", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.availabilityDayViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getConsumerV1AvailabilityServiceIdStartDateEndDateTimes - Returns a list of available times.
   *
   * <b>Deprecation Notice</b> : This endpoint is no longer being maintained and will be deprecated in a future release.        
   *             Use the /consumer/v1/availability{serviceId}/{startDate}/{endDate} endpoint instead.
  **/
  getConsumerV1AvailabilityServiceIdStartDateEndDateTimes(
    req: operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/times", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.availability3ViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailable - Returns a list of unavailable times.
   *
   * This endpoint is used to show unavailable times and provides information why the time is unavailable.
  **/
  getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailable(
    req: operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.unavailableTimeListViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getConsumerV1AvailabilityServiceIdStartDateEndDateWindows - Returns a list of available booking window times.
   *
   * This end point may be removed in the next release. It is used for server based availability from UnavailableTimes.
   * Use the v1/consumer/availability{serviceId}/{startDate}/{endDate} endpoint instead.
  **/
  getConsumerV1AvailabilityServiceIdStartDateEndDateWindows(
    req: operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/windows", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.windowAvailabilityViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}

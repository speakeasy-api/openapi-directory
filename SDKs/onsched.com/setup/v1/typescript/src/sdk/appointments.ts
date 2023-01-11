import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Appointments {
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
   * getSetupV1Appointments - Returns a list of appointments.
   *
   * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
   * Use the other query parameters to optionally filter the results list.
  **/
  getSetupV1Appointments(
    req: operations.GetSetupV1AppointmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1AppointmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSetupV1AppointmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/v1/appointments";
    
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
        const res: operations.GetSetupV1AppointmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.appointmentListViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSetupV1AppointmentsId - Returns an appointment object.
   *
   * The result returned is a single appointment object. A valid id is required to find the appointment. 
   * 
   * Find appointment id's using the GET consumer/v1/appointments end point.
  **/
  getSetupV1AppointmentsId(
    req: operations.GetSetupV1AppointmentsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1AppointmentsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSetupV1AppointmentsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/appointments/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSetupV1AppointmentsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.appointmentViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putSetupV1AppointmentsIdReassignResourceResourceId - Reassigns the appointment to the supplied resourceId
   *
   * The result returned is a single appointment object. A valid id is required to find the appointment. 
   * 
   * Find appointment id's using the GET consumer/v1/appointments end point.
  **/
  putSetupV1AppointmentsIdReassignResourceResourceId(
    req: operations.PutSetupV1AppointmentsIdReassignResourceResourceIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSetupV1AppointmentsIdReassignResourceResourceIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSetupV1AppointmentsIdReassignResourceResourceIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/appointments/{id}/reassign/resource/{resourceId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutSetupV1AppointmentsIdReassignResourceResourceIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.appointmentViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}

import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class LandlordController {
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
   * landlordControllerCreateMaintenancePreference - Post tenancy maintenance preferences:-
  **/
  landlordControllerCreateMaintenancePreference(
    req: operations.LandlordControllerCreateMaintenancePreferenceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerCreateMaintenancePreferenceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerCreateMaintenancePreferenceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/tenancy/maintenance/preference", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LandlordControllerCreateMaintenancePreferenceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.landlordControllerCreateMaintenancePreference200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                res.landlordControllerCreateMaintenancePreference200ApplicationXMLString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.landlordControllerCreateMaintenancePreference200TextJSONString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `text/xml`)) {
                res.landlordControllerCreateMaintenancePreference200TextXMLString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * landlordControllerGetAccounts - Get the accounting details for the landlord.
  **/
  landlordControllerGetAccounts(
    req: operations.LandlordControllerGetAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/accounting", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.LandlordControllerGetAccountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.landlordAccountingModel = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.landlordAccountingModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * landlordControllerGetDocument - Download a Document
  **/
  landlordControllerGetDocument(
    req: operations.LandlordControllerGetDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetDocumentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/document", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.LandlordControllerGetDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.matchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * landlordControllerGetInvetoryReport - Generate a Inventory PDF for a tenancy
  **/
  landlordControllerGetInvetoryReport(
    req: operations.LandlordControllerGetInvetoryReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetInvetoryReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetInvetoryReportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/inventory", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.LandlordControllerGetInvetoryReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.matchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * landlordControllerGetInvoice - Get an invoice pdf belonging to the landlord.
  **/
  landlordControllerGetInvoice(
    req: operations.LandlordControllerGetInvoiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetInvoiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetInvoiceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/invoice", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.LandlordControllerGetInvoiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.matchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * landlordControllerGetLandlordCrmEntries - Retrieve landlord's CRM ID
  **/
  landlordControllerGetLandlordCrmEntries(
    req: operations.LandlordControllerGetLandlordCrmEntriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetLandlordCrmEntriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetLandlordCrmEntriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/landlordcrmentries", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.LandlordControllerGetLandlordCrmEntriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.landlordCrmEntries = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.landlordCrmEntries = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.matchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * landlordControllerGetMaintenanceJobs - Get Active maintenance jobs.
  **/
  landlordControllerGetMaintenanceJobs(
    req: operations.LandlordControllerGetMaintenanceJobsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetMaintenanceJobsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetMaintenanceJobsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/maintenance", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.LandlordControllerGetMaintenanceJobsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.landlordMaintenanceModel = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.landlordMaintenanceModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * landlordControllerGetProfitLossReport - Generate a Profit and Loss Report
  **/
  landlordControllerGetProfitLossReport(
    req: operations.LandlordControllerGetProfitLossReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetProfitLossReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetProfitLossReportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/profitloss", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.LandlordControllerGetProfitLossReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.landlordProfitLossModel = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.landlordProfitLossModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * landlordControllerGetRentArrears - Rent Arrears
  **/
  landlordControllerGetRentArrears(
    req: operations.LandlordControllerGetRentArrearsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetRentArrearsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetRentArrearsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/rentarrears", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.LandlordControllerGetRentArrearsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.landlordRentArrearsModel = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.landlordRentArrearsModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * landlordControllerGetSasReport - Generate a Self Assessment Tax Report
  **/
  landlordControllerGetSasReport(
    req: operations.LandlordControllerGetSasReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetSasReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetSasReportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/sas", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.LandlordControllerGetSasReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.matchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * landlordControllerGetSettings - Get contact details of all linked landlords.
  **/
  landlordControllerGetSettings(
    req: operations.LandlordControllerGetSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/settings", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.LandlordControllerGetSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.landlordSettingsModel = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.landlordSettingsModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * landlordControllerGetSummaryDetails - Get the summary details for the landlord.
  **/
  landlordControllerGetSummaryDetails(
    req: operations.LandlordControllerGetSummaryDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetSummaryDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetSummaryDetailsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/summary", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.LandlordControllerGetSummaryDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.landlordSummaryModel = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.landlordSummaryModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * landlordControllerGetTenancy - Get tenancy details.
  **/
  landlordControllerGetTenancy(
    req: operations.LandlordControllerGetTenancyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetTenancyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetTenancyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/tenancy", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.LandlordControllerGetTenancyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.landlordTenancyModel = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.landlordTenancyModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * landlordControllerGetTenancyAgreementReport - Generate a Tenancy Agreement Copy (PDF)
  **/
  landlordControllerGetTenancyAgreementReport(
    req: operations.LandlordControllerGetTenancyAgreementReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetTenancyAgreementReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetTenancyAgreementReportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/tenancyagreement", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.LandlordControllerGetTenancyAgreementReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.matchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
  }

}

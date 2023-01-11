import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Companies {
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
   * deleteSetupV1CompaniesDomainsId - Deletes a whitelisted domain for the authorized company
   * Returns view of domain deleted
  **/
  deleteSetupV1CompaniesDomainsId(
    req: operations.DeleteSetupV1CompaniesDomainsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSetupV1CompaniesDomainsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSetupV1CompaniesDomainsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/companies/domains/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSetupV1CompaniesDomainsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyDomainViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteSetupV1CompaniesEmailTemplatesMaster - Deletes custom master email template settings reverting to the default
   *
   * Settings exist for showing or hiding panels
   * and for changing color schemes
  **/
  deleteSetupV1CompaniesEmailTemplatesMaster(
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSetupV1CompaniesEmailTemplatesMasterResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/v1/companies/email/templates/master";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSetupV1CompaniesEmailTemplatesMasterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.masterEmailTemplateSettingsViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteSetupV1CompaniesRegionsId - Delete a region
   *
   * Deletes a region.
   * 
   * If the region is related to any business locations it cannot be deleted
  **/
  deleteSetupV1CompaniesRegionsId(
    req: operations.DeleteSetupV1CompaniesRegionsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSetupV1CompaniesRegionsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSetupV1CompaniesRegionsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/companies/regions/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSetupV1CompaniesRegionsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.regionViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSetupV1Companies - Returns a company profile information of the authorized company
  **/
  getSetupV1Companies(
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1CompaniesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/v1/companies";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSetupV1CompaniesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSetupV1CompaniesDomains - Returns a list of whitelisted domains for the authorized company
  **/
  getSetupV1CompaniesDomains(
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1CompaniesDomainsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/v1/companies/domains";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSetupV1CompaniesDomainsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyDomainListViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSetupV1CompaniesDomainsId - Returns a whitelisted domain for the authorized company
  **/
  getSetupV1CompaniesDomainsId(
    req: operations.GetSetupV1CompaniesDomainsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1CompaniesDomainsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSetupV1CompaniesDomainsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/companies/domains/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSetupV1CompaniesDomainsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyDomainViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSetupV1CompaniesEmailTemplates - Returns email template list from the authorized company
   *
   * Returns a list of email templates that may be customized
   * If the template has been customized, the customized property is true.
   * The scope parameter indicates if the email template has been customized
   * at Business Location level or Company level.
   * This endpoint returns only company level templates so the scope is always company
  **/
  getSetupV1CompaniesEmailTemplates(
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1CompaniesEmailTemplatesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/v1/companies/email/templates";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSetupV1CompaniesEmailTemplatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.emailTemplateListViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSetupV1CompaniesEmailTemplatesMaster - Returns master email template settings
   *
   * Settings exist for showing or hiding panels
   * and for changing color schemes
  **/
  getSetupV1CompaniesEmailTemplatesMaster(
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1CompaniesEmailTemplatesMasterResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/v1/companies/email/templates/master";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSetupV1CompaniesEmailTemplatesMasterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.masterEmailTemplateSettingsViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSetupV1CompaniesEmailTemplatesTemplateName - Returns default or custom email template from the authorized company
   *
   * The default email template is returned when a custom template is not found
   * The response content is in html format.
  **/
  getSetupV1CompaniesEmailTemplatesTemplateName(
    req: operations.GetSetupV1CompaniesEmailTemplatesTemplateNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1CompaniesEmailTemplatesTemplateNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSetupV1CompaniesEmailTemplatesTemplateNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/companies/email/templates/{templateName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSetupV1CompaniesEmailTemplatesTemplateNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.contentResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSetupV1CompaniesRegions - Returns a list of regions.
   *
   * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
   * Use the other query parameters to optionally filter the results list.
  **/
  getSetupV1CompaniesRegions(
    req: operations.GetSetupV1CompaniesRegionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1CompaniesRegionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSetupV1CompaniesRegionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/v1/companies/regions";
    
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
        const res: operations.GetSetupV1CompaniesRegionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.regionListViewModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * getSetupV1CompaniesRegionsId - Get a Region
  **/
  getSetupV1CompaniesRegionsId(
    req: operations.GetSetupV1CompaniesRegionsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1CompaniesRegionsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSetupV1CompaniesRegionsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/companies/regions/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSetupV1CompaniesRegionsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.regionViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSetupV1CompaniesTimezonesDate - Returns timezone information for all supported Timezone's
   *
   * The result returned is a single location object. An id is required to find the location. Find location id's using the GET consumer/v1/locations end point,
  **/
  getSetupV1CompaniesTimezonesDate(
    req: operations.GetSetupV1CompaniesTimezonesDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1CompaniesTimezonesDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSetupV1CompaniesTimezonesDateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/companies/timezones/{date}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSetupV1CompaniesTimezonesDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.timezoneViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postSetupV1Companies - Creates a company profile.
   *
   * Use this endpoint to create a new Company Profile. 
   * This endpoint is restricted by scope and limited to use by OnSched internal apps
   * 
   * The timezoneName can be expressed as an Iana Timezone e.g. America/New_York
   * or a Microsoft Timezone e.g. Eastern Standard Time
  **/
  postSetupV1Companies(
    req: operations.PostSetupV1CompaniesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSetupV1CompaniesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSetupV1CompaniesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/v1/companies";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostSetupV1CompaniesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postSetupV1CompaniesDomains - Creates a whitelisted domain for the authorized company
   * Returns view of domain created
  **/
  postSetupV1CompaniesDomains(
    req: operations.PostSetupV1CompaniesDomainsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSetupV1CompaniesDomainsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSetupV1CompaniesDomainsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/v1/companies/domains";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostSetupV1CompaniesDomainsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyDomainViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postSetupV1CompaniesEmailTemplatesMaster - Updates / creates custom master email template settings
   *
   * Settings exist for showing or hiding panels
   * and for changing color schemes
  **/
  postSetupV1CompaniesEmailTemplatesMaster(
    req: operations.PostSetupV1CompaniesEmailTemplatesMasterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSetupV1CompaniesEmailTemplatesMasterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSetupV1CompaniesEmailTemplatesMasterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/v1/companies/email/templates/master";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostSetupV1CompaniesEmailTemplatesMasterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.masterEmailTemplateSettingsViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postSetupV1CompaniesRegions - Create a new region
   *
   * Creates a new region.
   * 
   * Regions can be mapped to business locations. Locations can be filtered by region id
  **/
  postSetupV1CompaniesRegions(
    req: operations.PostSetupV1CompaniesRegionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSetupV1CompaniesRegionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSetupV1CompaniesRegionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/v1/companies/regions";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostSetupV1CompaniesRegionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.regionViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putSetupV1Companies - Updates a company object.
   *
   * Use this endpoint to update the authorized company. 
   * 
   * Your client credentials resolve to a single company.
   * 
   * The timezoneName can be expressed as an Iana Timezone e.g. America/New_York
   * or a Microsoft Timezone e.g. Eastern Standard Time
  **/
  putSetupV1Companies(
    req: operations.PutSetupV1CompaniesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSetupV1CompaniesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSetupV1CompaniesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/v1/companies";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutSetupV1CompaniesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putSetupV1CompaniesDomainsId - Updates a whitelisted domain for the authorized company
   * Returns view of domain updated
  **/
  putSetupV1CompaniesDomainsId(
    req: operations.PutSetupV1CompaniesDomainsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSetupV1CompaniesDomainsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSetupV1CompaniesDomainsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/companies/domains/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutSetupV1CompaniesDomainsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyDomainViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putSetupV1CompaniesRegionsId - Update a region
   *
   * Updates a region.
   * 
   * Regions can be mapped to business locations. Locations can be filtered by region id.
  **/
  putSetupV1CompaniesRegionsId(
    req: operations.PutSetupV1CompaniesRegionsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSetupV1CompaniesRegionsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSetupV1CompaniesRegionsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/companies/regions/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutSetupV1CompaniesRegionsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.regionViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}

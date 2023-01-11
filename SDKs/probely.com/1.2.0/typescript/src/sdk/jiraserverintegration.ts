import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class JiraServerIntegration {
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
   * getIntegrationsJiraServerProjects - List Jira Projects
  **/
  getIntegrationsJiraServerProjects(
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntegrationsJiraServerProjectsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/integrations/jira-server/projects/";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIntegrationsJiraServerProjectsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.jiraProjects = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getIntegrationsJiraServerProjects401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getIntegrationsJiraServerProjects403ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getIntegrationsJiraServerProjectsProjectIdIssueTypes - Retrieve project issue types
  **/
  getIntegrationsJiraServerProjectsProjectIdIssueTypes(
    req: operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/integrations/jira-server/projects/{project_id}/issue_types/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.jiraIssueTypes = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities - Retrieve issue priorities
  **/
  getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities(
    req: operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/integrations/jira-server/projects/{project_id}/issue_types/{issue_type_id}/priorities/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.jiraIssuePriorities = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus - Retrieve issue statuses
  **/
  getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus(
    req: operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/integrations/jira-server/projects/{project_id}/issue_types/{issue_type_id}/status/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.jiraIssueStatuses = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getTargetsTargetIdFindingsIdIntegrationsJiraServer - Retrieve Jira Server finding configuration
  **/
  getTargetsTargetIdFindingsIdIntegrationsJiraServer(
    req: operations.GetTargetsTargetIdFindingsIdIntegrationsJiraServerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTargetsTargetIdFindingsIdIntegrationsJiraServerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTargetsTargetIdFindingsIdIntegrationsJiraServerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/targets/{target_id}/findings/{id}/integrations/jira-server/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTargetsTargetIdFindingsIdIntegrationsJiraServerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.jiraFinding = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getTargetsTargetIdIntegrationsJiraServer - Retrieve Jira Server Target configuration
  **/
  getTargetsTargetIdIntegrationsJiraServer(
    req: operations.GetTargetsTargetIdIntegrationsJiraServerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTargetsTargetIdIntegrationsJiraServerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTargetsTargetIdIntegrationsJiraServerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/targets/{target_id}/integrations/jira-server/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTargetsTargetIdIntegrationsJiraServerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.jiraScope = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * patchTargetsTargetIdFindingsIdIntegrationsJiraServer - Update Jira Server finding configuration
  **/
  patchTargetsTargetIdFindingsIdIntegrationsJiraServer(
    req: operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraServerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraServerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/targets/{target_id}/findings/{id}/integrations/jira-server/", req.pathParams);

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
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.jiraFinding = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.patchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.patchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.patchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * patchTargetsTargetIdIntegrationsJiraServer - Update Jira Server target configuration
  **/
  patchTargetsTargetIdIntegrationsJiraServer(
    req: operations.PatchTargetsTargetIdIntegrationsJiraServerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchTargetsTargetIdIntegrationsJiraServerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchTargetsTargetIdIntegrationsJiraServerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/targets/{target_id}/integrations/jira-server/", req.pathParams);

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
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchTargetsTargetIdIntegrationsJiraServerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.jiraScope = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.patchTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.patchTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.patchTargetsTargetIdIntegrationsJiraServer404ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putTargetsTargetIdFindingsIdIntegrationsJiraServer - Update Jira Server finding configuration
  **/
  putTargetsTargetIdFindingsIdIntegrationsJiraServer(
    req: operations.PutTargetsTargetIdFindingsIdIntegrationsJiraServerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutTargetsTargetIdFindingsIdIntegrationsJiraServerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/targets/{target_id}/findings/{id}/integrations/jira-server/", req.pathParams);

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
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.jiraFinding = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.putTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.putTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.putTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putTargetsTargetIdIntegrationsJiraServer - Update Jira Server target configuration
  **/
  putTargetsTargetIdIntegrationsJiraServer(
    req: operations.PutTargetsTargetIdIntegrationsJiraServerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutTargetsTargetIdIntegrationsJiraServerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutTargetsTargetIdIntegrationsJiraServerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/targets/{target_id}/integrations/jira-server/", req.pathParams);

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
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.PutTargetsTargetIdIntegrationsJiraServerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.jiraScope = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.putTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.putTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.putTargetsTargetIdIntegrationsJiraServer404ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}

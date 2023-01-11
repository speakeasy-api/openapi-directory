import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Corporate {
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
   * getAvailableCorporatePermissions - Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
   *
   * Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
  **/
  getAvailableCorporatePermissions(
    config?: AxiosRequestConfig
  ): Promise<operations.GetAvailableCorporatePermissionsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/corporate/permissions";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAvailableCorporatePermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.permissionList = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getAvailableCorporatePermissionsById - Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
   *
   * Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
  **/
  getAvailableCorporatePermissionsById(
    req: operations.GetAvailableCorporatePermissionsByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAvailableCorporatePermissionsByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAvailableCorporatePermissionsByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/corporates/{corporateId}/permissions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAvailableCorporatePermissionsByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.permissionList = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCorporate - Get details of my corporate account
   *
   * Get details of my corporate account
  **/
  getCorporate(
    config?: AxiosRequestConfig
  ): Promise<operations.GetCorporateResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/corporate";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCorporateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.corporateAccount = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCorporateById - Get details of this corporate account
   *
   * Get details of this corporate account
  **/
  getCorporateById(
    req: operations.GetCorporateByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCorporateByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCorporateByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/corporates/{corporateId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCorporateByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.corporateAccount = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCorporateUserGroups - Get a list of user groups for my corporate account
   *
   * Get a list of user groups for my corporate account
  **/
  getCorporateUserGroups(
    config?: AxiosRequestConfig
  ): Promise<operations.GetCorporateUserGroupsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/corporate/user-groups";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCorporateUserGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.userGroupList = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCorporateUserGroupsById - Get a list of user groups for this corporate account
   *
   * Get a list of user groups for this corporate account
  **/
  getCorporateUserGroupsById(
    req: operations.GetCorporateUserGroupsByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCorporateUserGroupsByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCorporateUserGroupsByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/corporates/{corporateId}/user-groups", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCorporateUserGroupsByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.userGroupList = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCorporateUsers - Get a list of users for my corporate account
   *
   * Get a list of users for my corporate account
  **/
  getCorporateUsers(
    config?: AxiosRequestConfig
  ): Promise<operations.GetCorporateUsersResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/corporate/users";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCorporateUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.userList = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCorporateUsersById - Get a list of users for this corporate account
   *
   * Get a list of users for this corporate account
  **/
  getCorporateUsersById(
    req: operations.GetCorporateUsersByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCorporateUsersByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCorporateUsersByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/corporates/{corporateId}/users", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCorporateUsersByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.userList = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * saveCorporateUser - Create or update a corporate user
   *
   * Create or update a corporate user
  **/
  saveCorporateUser(
    req: operations.SaveCorporateUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SaveCorporateUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SaveCorporateUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/corporate/users";

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
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SaveCorporateUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.user = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * saveCorporateUserGroup - Create or update a corporate user group
   *
   * Create or update a corporate user group
  **/
  saveCorporateUserGroup(
    req: operations.SaveCorporateUserGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SaveCorporateUserGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SaveCorporateUserGroupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/corporate/user-groups";

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
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SaveCorporateUserGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.userGroup = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * saveCorporateUserGroupById - Create or update a corporate user group for this corporate account
   *
   * Create or update a corporate user group for this corporate account
  **/
  saveCorporateUserGroupById(
    req: operations.SaveCorporateUserGroupByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SaveCorporateUserGroupByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SaveCorporateUserGroupByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/corporates/{corporateId}/user-groups", req.pathParams);

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
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SaveCorporateUserGroupByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.userGroup = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";




export const ServerList = [
	"http://redhat.local",
	"https://redhat.local/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
  }
  
  /**
   * latestPackage - Show me metadata of selected package
   *
   * Show me metadata of selected package
  **/
  latestPackage(
    req: operations.LatestPackageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LatestPackageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LatestPackageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/patch/v1/packages/{package_name}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LatestPackageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.controllersPackageDetailResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deletesystem - Delete system by inventory id
   *
   * Delete system by inventory id
  **/
  deletesystem(
    req: operations.DeletesystemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletesystemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletesystemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/patch/v1/systems/{inventory_id}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeletesystemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * detailAdvisory - Show me details an advisory by given advisory name
   *
   * Show me details an advisory by given advisory name
  **/
  detailAdvisory(
    req: operations.DetailAdvisoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DetailAdvisoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DetailAdvisoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/patch/v1/advisories/{advisory_id}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DetailAdvisoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.controllersAdvisoryDetailResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * detailSystem - Show me details about a system by given inventory id
   *
   * Show me details about a system by given inventory id
  **/
  detailSystem(
    req: operations.DetailSystemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DetailSystemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DetailSystemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/patch/v1/systems/{inventory_id}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DetailSystemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.controllersSystemDetailResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * exportAdvisories - Export applicable advisories for all my systems
   *
   * Export applicable advisories for all my systems
  **/
  exportAdvisories(
    req: operations.ExportAdvisoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ExportAdvisoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ExportAdvisoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/patch/v1/export/advisories";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ExportAdvisoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.controllersAdvisoryInlineItems = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/csv`)) {
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
   * exportAdvisorySystems - Export systems for my account
   *
   * Export systems for my account
  **/
  exportAdvisorySystems(
    req: operations.ExportAdvisorySystemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ExportAdvisorySystemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ExportAdvisorySystemsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/patch/v1/export/advisories/{advisory_id}/systems", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ExportAdvisorySystemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.controllersSystemInlineItems = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/csv`)) {
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
   * exportPackageSystems - Show me all my systems which have a package installed
   *
   * Show me all my systems which have a package installed
  **/
  exportPackageSystems(
    req: operations.ExportPackageSystemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ExportPackageSystemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ExportPackageSystemsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/patch/v1/export/packages/{package_name}/systems", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ExportPackageSystemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.controllersPackageSystemItems = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * exportPackages - Show me all installed packages across my systems
   *
   * Show me all installed packages across my systems
  **/
  exportPackages(
    req: operations.ExportPackagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ExportPackagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ExportPackagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/patch/v1/export/packages";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ExportPackagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.controllersPackageItems = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/csv`)) {
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
   * exportSystemAdvisories - Export applicable advisories for all my systems
   *
   * Export applicable advisories for all my systems
  **/
  exportSystemAdvisories(
    req: operations.ExportSystemAdvisoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ExportSystemAdvisoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ExportSystemAdvisoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/patch/v1/export/systems/{inventory_id}/advisories", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ExportSystemAdvisoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.controllersSystemAdvisoriesDBLookups = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/csv`)) {
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
   * exportSystemPackages - Show me details about a system packages by given inventory id
   *
   * Show me details about a system packages by given inventory id
  **/
  exportSystemPackages(
    req: operations.ExportSystemPackagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ExportSystemPackagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ExportSystemPackagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/patch/v1/export/systems/{inventory_id}/packages", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ExportSystemPackagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.controllersSystemPackageInlines = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * exportSystems - Export systems for my account
   *
   * Export systems for my account
  **/
  exportSystems(
    req: operations.ExportSystemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ExportSystemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ExportSystemsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/patch/v1/export/systems";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ExportSystemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.controllersSystemInlineItems = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/csv`)) {
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
   * listAdvisories - Show me all applicable advisories for all my systems
   *
   * Show me all applicable advisories for all my systems
  **/
  listAdvisories(
    req: operations.ListAdvisoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAdvisoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAdvisoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/patch/v1/advisories";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListAdvisoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.controllersAdvisoriesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listAdvisorySystems - Show me systems on which the given advisory is applicable
   *
   * Show me systems on which the given advisory is applicable
  **/
  listAdvisorySystems(
    req: operations.ListAdvisorySystemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAdvisorySystemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAdvisorySystemsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/patch/v1/advisories/{advisory_id}/systems", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListAdvisorySystemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.controllersAdvisorySystemsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listPackages - Show me all installed packages across my systems
   *
   * Show me all installed packages across my systems
  **/
  listPackages(
    req: operations.ListPackagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPackagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPackagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/patch/v1/packages/";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListPackagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.controllersPackagesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listSystemAdvisories - Show me advisories for a system by given inventory id
   *
   * Show me advisories for a system by given inventory id
  **/
  listSystemAdvisories(
    req: operations.ListSystemAdvisoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSystemAdvisoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSystemAdvisoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/patch/v1/systems/{inventory_id}/advisories", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListSystemAdvisoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.controllersSystemAdvisoriesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listSystems - Show me all my systems
   *
   * Show me all my systems
  **/
  listSystems(
    req: operations.ListSystemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSystemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSystemsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/patch/v1/systems";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListSystemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.controllersSystemsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * packageSystems - Show me all my systems which have a package installed
   *
   * Show me all my systems which have a package installed
  **/
  packageSystems(
    req: operations.PackageSystemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackageSystemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackageSystemsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/patch/v1/packages/{package_name}/systems", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.PackageSystemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.controllersPackageSystemsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * packageVersions - Show me all package versions installed on some system
   *
   * Show me all package versions installed on some system
  **/
  packageVersions(
    req: operations.PackageVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackageVersionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackageVersionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/patch/v1/packages/{package_name}/versions", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.PackageVersionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.controllersPackageVersionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * systemPackages - Show me details about a system packages by given inventory id
   *
   * Show me details about a system packages by given inventory id
  **/
  systemPackages(
    req: operations.SystemPackagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SystemPackagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SystemPackagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/patch/v1/systems/{inventory_id}/packages", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.SystemPackagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.controllersSystemPackageResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * viewAdvisoriesSystems - View advisory-system pairs for selected systems and advisories
   *
   * View advisory-system pairs for selected systems and advisories
  **/
  viewAdvisoriesSystems(
    req: operations.ViewAdvisoriesSystemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ViewAdvisoriesSystemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ViewAdvisoriesSystemsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/patch/v1/views/advisories/systems";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ViewAdvisoriesSystemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.controllersAdvisoriesSystemsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * viewSystemsAdvisories - View system-advisory pairs for selected systems and advisories
   *
   * View system-advisory pairs for selected systems and advisories
  **/
  viewSystemsAdvisories(
    req: operations.ViewSystemsAdvisoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ViewSystemsAdvisoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ViewSystemsAdvisoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/patch/v1/views/systems/advisories";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ViewSystemsAdvisoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.controllersSystemsAdvisoriesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
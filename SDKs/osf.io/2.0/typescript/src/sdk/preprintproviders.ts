import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class PreprintProviders {
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
   * preprintProviderDetail - Retrieve a preprint provider
   *
   * Retrieves the details of a preprint provider.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested preprint provider, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
   * 
   * #### Acceptable Subjects Structure
   * Each preprint provider specifies acceptable subjects.
   * `subjects_acceptable` is an array found in `attributes`.
   * Subjects consist of general parent subjects (e.g., Engineering), more specific child subjects (e.g., Aerospace Engineering), and even more specific grandchild subjects (e.g., Aerodynamics and Fluid Mechanics). Subjects can only be nested 3 deep.
   * 
   * 
   *     "subjects_acceptable": [
   *         [
   *             [
   *                 # Parent Subject:
   *                 # Architecture
   *                 "584240d954be81056ceca9e5",
   * 
   *                 # Child Subject:
   *                 # Architectural Engineering
   *                 "584240da54be81056cecac87"
   *             ],
   *             # Include all Architectural Engineering's children:
   *             true
   *         ],
   *         [
   *             [
   *                 # Parent Subject:
   *                 # Engineering
   *                 "584240da54be81056cecaca9",
   * 
   *                 # Child Subject:
   *                 # Aerospace Engineering
   *                 "584240db54be81056cecacd6",
   * 
   *                 # Grandchild Subject:
   *                 # Aerodynamics and Fluid Mechanics
   *                 "584240da54be81056cecaa74"
   *             ],
   *             # All nestings 3 deep must be false
   *             false
   *         ]
   *     ]
   * 
   * The above structure would allow Architecture, Architectural Engineering, all of Architectural Engineering's children, Engineering, Aerospace Engineering, and Aerodynamics and Fluid Mechanics.
  **/
  preprintProviderDetail(
    req: operations.PreprintProviderDetailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreprintProviderDetailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreprintProviderDetailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/preprint_providers/{preprint_provider_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PreprintProviderDetailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `*/*`)) {
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
   * preprintProviderLicensesList - List all licenses
   *
   * 
   * A paginated list of the licenses allowed bya preprint provider.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  preprintProviderLicensesList(
    req: operations.PreprintProviderLicensesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreprintProviderLicensesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreprintProviderLicensesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/preprint_providers/{preprint_provider_id}/licenses/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PreprintProviderLicensesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `*/*`)) {
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
   * preprintProviderList - List all preprint providers
   *
   * 
   * A paginated list of all preprint providers. The returned preprint providers are sorted by their creation date, with the most recent preprints appearing first.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * This request should never return an error.
   * #### Filtering
   * You can optionally request that the response only include preprint providers that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprint_providers/?filter[id]=osf.
   * 
   * Preprint Providers may be filtered by their `id`, `name`,  and `description`
  **/
  preprintProviderList(
    config?: AxiosRequestConfig
  ): Promise<operations.PreprintProviderListResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/preprint_providers/";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PreprintProviderListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `*/*`)) {
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
   * preprintProviderTaxonomiesList - List all taxonomies
   *
   * 
   * A paginated list of the taxonomies for a preprint provider. The returned preprint providers taxonomies are sorted by their creation date, with the most recent preprints appearing first.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  preprintProviderTaxonomiesList(
    req: operations.PreprintProviderTaxonomiesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreprintProviderTaxonomiesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreprintProviderTaxonomiesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/preprint_providers/{preprint_provider_id}/taxonomies/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PreprintProviderTaxonomiesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `*/*`)) {
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
   * preprintProvidersPreprintsList - List all preprints
   *
   * 
   * A paginated list of preprints from the specified preprint provider. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.
   * 
   * The `links` key contains a dictionary with keys that can be used for [pagination](#tag/Pagination).
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
   * 
   * #### Filtering
   * You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprint_providers/osf/preprints/?filter[is_published]=true.
   * 
   * Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.
  **/
  preprintProvidersPreprintsList(
    req: operations.PreprintProvidersPreprintsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreprintProvidersPreprintsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreprintProvidersPreprintsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/preprint_providers/{preprint_provider_id}/preprints/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PreprintProvidersPreprintsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `*/*`)) {
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

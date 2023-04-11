import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CreateBroker creates a Broker.
     */
    servicebrokerProjectsBrokersCreate(req: operations.ServicebrokerProjectsBrokersCreateRequest, security: operations.ServicebrokerProjectsBrokersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersCreateResponse>;
    /**
     * Lists all the bindings in the instance.
     */
    servicebrokerProjectsBrokersInstancesBindingsList(req: operations.ServicebrokerProjectsBrokersInstancesBindingsListRequest, security: operations.ServicebrokerProjectsBrokersInstancesBindingsListSecurity, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersInstancesBindingsListResponse>;
    /**
     * Lists all the instances in the brokers
     * This API is an extension and not part of the OSB spec.
     * Hence the path is a standard Google API URL.
     */
    servicebrokerProjectsBrokersInstancesList(req: operations.ServicebrokerProjectsBrokersInstancesListRequest, security: operations.ServicebrokerProjectsBrokersInstancesListSecurity, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersInstancesListResponse>;
    /**
     * ListBrokers lists brokers.
     */
    servicebrokerProjectsBrokersList(req: operations.ServicebrokerProjectsBrokersListRequest, security: operations.ServicebrokerProjectsBrokersListSecurity, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersListResponse>;
    /**
     * Lists all the Services registered with this broker for consumption for
     * given service registry broker, which contains an set of services.
     * Note, that Service producer API is separate from Broker API.
     */
    servicebrokerProjectsBrokersV2CatalogList(req: operations.ServicebrokerProjectsBrokersV2CatalogListRequest, security: operations.ServicebrokerProjectsBrokersV2CatalogListSecurity, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersV2CatalogListResponse>;
    /**
     * Provisions a service instance.
     * If `request.accepts_incomplete` is false and Broker cannot execute request
     * synchronously HTTP 422 error will be returned along with
     * FAILED_PRECONDITION status.
     * If `request.accepts_incomplete` is true and the Broker decides to execute
     * resource asynchronously then HTTP 202 response code will be returned and a
     * valid polling operation in the response will be included.
     * If Broker executes the request synchronously and it succeeds HTTP 201
     * response will be furnished.
     * If identical instance exists, then HTTP 200 response will be returned.
     * If an instance with identical ID but mismatching parameters exists, then
     * HTTP 409 status code will be returned.
     */
    servicebrokerProjectsBrokersV2ServiceInstancesCreate(req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest, security: operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse>;
    /**
     * Updates an existing service instance.
     * See CreateServiceInstance for possible response codes.
     */
    servicebrokerProjectsBrokersV2ServiceInstancesPatch(req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest, security: operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse>;
    /**
     * CreateBinding generates a service binding to an existing service instance.
     * See ProviServiceInstance for async operation details.
     */
    servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate(req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest, security: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateResponse>;
    /**
     * Unbinds from a service instance.
     * For synchronous/asynchronous request details see CreateServiceInstance
     * method.
     * If binding does not exist HTTP 410 status will be returned.
     */
    servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDelete(req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest, security: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse>;
    /**
     * GetBinding returns the binding information.
     */
    servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet(req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest, security: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse>;
    /**
     * Returns the state of the last operation for the binding.
     * Only last (or current) operation can be polled.
     */
    servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation(req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest, security: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationSecurity, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse>;
}

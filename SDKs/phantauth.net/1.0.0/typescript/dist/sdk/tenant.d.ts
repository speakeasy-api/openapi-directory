import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To customize the application, you need to use one or more so-called tenants. A tenant can be consiered as an independent PhantAuth service. A tenant has its own random user generator endpoints and OpenID Connect endpoints.
 *
 * @remarks
 *
 * The tenants can be organised into so-called domains. Practically, a domain is a DNS zone, which contains the settings of the given tenant(s). The tenants as well as the domain can be configured by the use of DNS TXT records.
 *
 * The URL of the tenant issuer is in `https://phantauth.net/_{tenant}` format, where `tenant` is the fully qualified DNS name associated with the tenant. When using a PhantAuth official tenant, you can omit `phantauth.net` from the end of the name. When using a community-created, shared tenant, `phantauth.cf` can be omitted from the end of the name.
 * When using a default tenant (default.phantauth.net), the issuer URL is identical with the PhantAuth base URL, that is, [https://phantauth.net](https://phantauth.net).
 *
 * The resource URL is relative to the URL of the tenant issuer URL, that is, the endpoint address of the random user generator for the tenant named `faker` is: [https://phantauth.net/_faker/user](https://phantauth.net/_faker/user).
 */
export declare class Tenant {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a Tenant
     *
     * @remarks
     * This endpoint allows you to get the data of a given PhantAuth tenant. To use the PhantAuth services, you don't need this endpoint.
     * It is, therefore, mainly used for debug/diagnostic purposes in tenant customization.
     *
     * Tenantname is the name of the full DNS domain of the tenant you get.
     * In the case of an official and shared tenant (phantauth.net and phantauth.cf DNS domains), the DNS domain can be omitted (e.g. *default* or *faker*).
     */
    getTenantTenantname(req: operations.GetTenantTenantnameRequest, config?: AxiosRequestConfig): Promise<operations.GetTenantTenantnameResponse>;
}

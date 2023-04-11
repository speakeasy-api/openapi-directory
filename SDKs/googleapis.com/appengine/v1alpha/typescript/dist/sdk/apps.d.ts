import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Apps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Uploads the specified SSL certificate.
     */
    appengineAppsAuthorizedCertificatesCreate(req: operations.AppengineAppsAuthorizedCertificatesCreateRequest, security: operations.AppengineAppsAuthorizedCertificatesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsAuthorizedCertificatesCreateResponse>;
    /**
     * Deletes the specified SSL certificate.
     */
    appengineAppsAuthorizedCertificatesDelete(req: operations.AppengineAppsAuthorizedCertificatesDeleteRequest, security: operations.AppengineAppsAuthorizedCertificatesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsAuthorizedCertificatesDeleteResponse>;
    /**
     * Gets the specified SSL certificate.
     */
    appengineAppsAuthorizedCertificatesGet(req: operations.AppengineAppsAuthorizedCertificatesGetRequest, security: operations.AppengineAppsAuthorizedCertificatesGetSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsAuthorizedCertificatesGetResponse>;
    /**
     * Lists all SSL certificates the user is authorized to administer.
     */
    appengineAppsAuthorizedCertificatesList(req: operations.AppengineAppsAuthorizedCertificatesListRequest, security: operations.AppengineAppsAuthorizedCertificatesListSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsAuthorizedCertificatesListResponse>;
    /**
     * Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
     */
    appengineAppsAuthorizedCertificatesPatch(req: operations.AppengineAppsAuthorizedCertificatesPatchRequest, security: operations.AppengineAppsAuthorizedCertificatesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsAuthorizedCertificatesPatchResponse>;
    /**
     * Lists all domains the user is authorized to administer.
     */
    appengineAppsAuthorizedDomainsList(req: operations.AppengineAppsAuthorizedDomainsListRequest, security: operations.AppengineAppsAuthorizedDomainsListSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsAuthorizedDomainsListResponse>;
    /**
     * Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
     */
    appengineAppsDomainMappingsCreate(req: operations.AppengineAppsDomainMappingsCreateRequest, security: operations.AppengineAppsDomainMappingsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsDomainMappingsCreateResponse>;
    /**
     * Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
     */
    appengineAppsDomainMappingsDelete(req: operations.AppengineAppsDomainMappingsDeleteRequest, security: operations.AppengineAppsDomainMappingsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsDomainMappingsDeleteResponse>;
    /**
     * Gets the specified domain mapping.
     */
    appengineAppsDomainMappingsGet(req: operations.AppengineAppsDomainMappingsGetRequest, security: operations.AppengineAppsDomainMappingsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsDomainMappingsGetResponse>;
    /**
     * Lists the domain mappings on an application.
     */
    appengineAppsDomainMappingsList(req: operations.AppengineAppsDomainMappingsListRequest, security: operations.AppengineAppsDomainMappingsListSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsDomainMappingsListResponse>;
    /**
     * Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
     */
    appengineAppsDomainMappingsPatch(req: operations.AppengineAppsDomainMappingsPatchRequest, security: operations.AppengineAppsDomainMappingsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsDomainMappingsPatchResponse>;
    /**
     * Gets information about a location.
     */
    appengineAppsLocationsGet(req: operations.AppengineAppsLocationsGetRequest, security: operations.AppengineAppsLocationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsLocationsGetResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    appengineAppsLocationsList(req: operations.AppengineAppsLocationsListRequest, security: operations.AppengineAppsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsLocationsListResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    appengineAppsOperationsGet(req: operations.AppengineAppsOperationsGetRequest, security: operations.AppengineAppsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
     */
    appengineAppsOperationsList(req: operations.AppengineAppsOperationsListRequest, security: operations.AppengineAppsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsOperationsListResponse>;
}

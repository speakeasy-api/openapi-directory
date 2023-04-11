import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Publications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes a publication reader, effectively severing the association with a Google user. If `force` is set to true, any entitlements for this reader will also be deleted. (Otherwise, the request will only work if the reader has no entitlements.) - If the reader does not exist, return NOT_FOUND. - Return FAILED_PRECONDITION if the force field is false (or unset) and entitlements are present.
     */
    readerrevenuesubscriptionlinkingPublicationsReadersDelete(req: operations.ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteResponse>;
    /**
     * Gets the reader entitlements for a publication reader. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.
     */
    readerrevenuesubscriptionlinkingPublicationsReadersGetEntitlements(req: operations.ReaderrevenuesubscriptionlinkingPublicationsReadersGetEntitlementsRequest, config?: AxiosRequestConfig): Promise<operations.ReaderrevenuesubscriptionlinkingPublicationsReadersGetEntitlementsResponse>;
    /**
     * Updates the reader entitlements for a publication reader. The entire reader entitlements will be overwritten by the new reader entitlements in the payload, like a PUT. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.
     */
    readerrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlements(req: operations.ReaderrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlementsRequest, config?: AxiosRequestConfig): Promise<operations.ReaderrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlementsResponse>;
}

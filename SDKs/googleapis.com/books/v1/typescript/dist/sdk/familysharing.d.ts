import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Familysharing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets information regarding the family that the user is part of.
     */
    booksFamilysharingGetFamilyInfo(req: operations.BooksFamilysharingGetFamilyInfoRequest, security: operations.BooksFamilysharingGetFamilyInfoSecurity, config?: AxiosRequestConfig): Promise<operations.BooksFamilysharingGetFamilyInfoResponse>;
    /**
     * Initiates sharing of the content with the user's family. Empty response indicates success.
     */
    booksFamilysharingShare(req: operations.BooksFamilysharingShareRequest, security: operations.BooksFamilysharingShareSecurity, config?: AxiosRequestConfig): Promise<operations.BooksFamilysharingShareResponse>;
    /**
     * Initiates revoking content that has already been shared with the user's family. Empty response indicates success.
     */
    booksFamilysharingUnshare(req: operations.BooksFamilysharingUnshareRequest, security: operations.BooksFamilysharingUnshareSecurity, config?: AxiosRequestConfig): Promise<operations.BooksFamilysharingUnshareResponse>;
}

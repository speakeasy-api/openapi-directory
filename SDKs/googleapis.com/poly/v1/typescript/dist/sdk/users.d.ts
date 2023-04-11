import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists assets authored by the given user. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of PRIVATE or UNLISTED and assets which are All Rights Reserved for the currently-authenticated user.
     */
    polyUsersAssetsList(req: operations.PolyUsersAssetsListRequest, config?: AxiosRequestConfig): Promise<operations.PolyUsersAssetsListResponse>;
    /**
     * Lists assets that the user has liked. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of UNLISTED.
     */
    polyUsersLikedassetsList(req: operations.PolyUsersLikedassetsListRequest, config?: AxiosRequestConfig): Promise<operations.PolyUsersLikedassetsListResponse>;
}

import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * KKid API Functions
 *
 * @see {@link https://github.com/kumpeapps/kkid}
 */
export declare class KKid {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * returns allowance balance and allowance transactions
     *
     * @remarks
     * By passing in the appropriate options, you can view allowance balance and allowance transactions for a given user provided that they are within the masterID account of the authenticated user.
     *
     */
    kkidAllowanceGet(req: operations.KkidAllowanceGetRequest, security: operations.KkidAllowanceGetSecurity, config?: AxiosRequestConfig): Promise<operations.KkidAllowanceGetResponse>;
    /**
     * adds new allowance transaction to kidUserID
     *
     * @remarks
     * By passing in the appropriate options, you can add an allowance transaction to a given user.
     *
     */
    kkidAllowancePost(req: operations.KkidAllowancePostRequest, security: operations.KkidAllowancePostSecurity, config?: AxiosRequestConfig): Promise<operations.KkidAllowancePostResponse>;
    /**
     * subscribes/unsubscribes/registers for apns push notifications
     */
    kkidApnsPost(req: operations.KkidApnsPostRequest, security: operations.KkidApnsPostSecurity, config?: AxiosRequestConfig): Promise<operations.KkidApnsPostResponse>;
    /**
     * deletes chore for given chore id
     *
     * @remarks
     * By passing in the appropriate options, you can delete a chore for the given chore id under authenticated user's master account
     *
     */
    kkidChorelistDelete(req: operations.KkidChorelistDeleteRequest, security: operations.KkidChorelistDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.KkidChorelistDeleteResponse>;
    /**
     * returns list of chores for given user
     *
     * @remarks
     * By passing in the appropriate options, you can search for
     * chores assigned to a given user within the authenticated user's master account
     *
     */
    kkidChorelistGet(req: operations.KkidChorelistGetRequest, security: operations.KkidChorelistGetSecurity, config?: AxiosRequestConfig): Promise<operations.KkidChorelistGetResponse>;
    /**
     * adds chore for given user
     *
     * @remarks
     * By passing in the appropriate options, you can add a chore to given kid username under authenticated user's master account
     *
     */
    kkidChorelistPost(req: operations.KkidChorelistPostRequest, security: operations.KkidChorelistPostSecurity, config?: AxiosRequestConfig): Promise<operations.KkidChorelistPostResponse>;
    /**
     * updates chore for given chore id
     *
     * @remarks
     * By passing in the appropriate options, you can update the fields of a specific core within the authenticated user's master account
     *
     */
    kkidChorelistPut(req: operations.KkidChorelistPutRequest, security: operations.KkidChorelistPutSecurity, config?: AxiosRequestConfig): Promise<operations.KkidChorelistPutResponse>;
    /**
     * adds new master user account
     *
     * @remarks
     * By passing in the appropriate variables this method creates a new user with master account access. (The use of this method is restricted to Superusers ONLY)
     *
     */
    kkidMasteruserPost(req: operations.KkidMasteruserPostRequest, security: operations.KkidMasteruserPostSecurity, config?: AxiosRequestConfig): Promise<operations.KkidMasteruserPostResponse>;
    /**
     * Create Share Link
     *
     * @remarks
     * Create share link
     */
    kkidShareGet(req: operations.KkidShareGetRequest, security: operations.KkidShareGetSecurity, config?: AxiosRequestConfig): Promise<operations.KkidShareGetResponse>;
    /**
     * Gets user info
     *
     * @remarks
     * Gets user info for authenticated user
     */
    kkidUserGet(req: operations.KkidUserGetRequest, config?: AxiosRequestConfig): Promise<operations.KkidUserGetResponse>;
    /**
     * deletes user
     *
     * @remarks
     * By passing in the appropriate variables this method deletes the specified user. (This function is restricted to Superusers ONLY)
     *
     */
    kkidUserlistDelete(req: operations.KkidUserlistDeleteRequest, security: operations.KkidUserlistDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.KkidUserlistDeleteResponse>;
    /**
     * returns list of users
     *
     * @remarks
     * By passing in the appropriate options, you can search for
     * users within the authenticated user's master account
     *
     */
    kkidUserlistGet(req: operations.KkidUserlistGetRequest, config?: AxiosRequestConfig): Promise<operations.KkidUserlistGetResponse>;
    /**
     * adds new child user
     *
     * @remarks
     * By passing in the appropriate variables this method creates a new user and assigns it to the master account of the authenticated user. By default this user will have chores and allowance access.
     *
     */
    kkidUserlistPost(req: operations.KkidUserlistPostRequest, security: operations.KkidUserlistPostSecurity, config?: AxiosRequestConfig): Promise<operations.KkidUserlistPostResponse>;
    /**
     * updates user
     *
     * @remarks
     * By passing in the appropriate variables this method updates the user's profile
     *
     */
    kkidUserlistPut(req: operations.KkidUserlistPutRequest, config?: AxiosRequestConfig): Promise<operations.KkidUserlistPutResponse>;
    /**
     * Delete item from wishlist
     */
    kkidWishlistDelete(req: operations.KkidWishlistDeleteRequest, config?: AxiosRequestConfig): Promise<operations.KkidWishlistDeleteResponse>;
    /**
     * Get list of wishlist items
     */
    kkidWishlistGet(req: operations.KkidWishlistGetRequest, config?: AxiosRequestConfig): Promise<operations.KkidWishlistGetResponse>;
    /**
     * Add item to kid's wishlist
     */
    kkidWishlistPost(req: operations.KkidWishlistPostRequest, config?: AxiosRequestConfig): Promise<operations.KkidWishlistPostResponse>;
    /**
     * Update item on kid's wishlist
     */
    kkidWishlistPut(req: operations.KkidWishlistPutRequest, config?: AxiosRequestConfig): Promise<operations.KkidWishlistPutResponse>;
}

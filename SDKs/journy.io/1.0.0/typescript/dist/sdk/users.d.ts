import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints for creating, deleting or updating users.
 */
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete user
     *
     * @remarks
     * Endpoint to delete a user.
     */
    deleteUser(req: operations.DeleteUserRequestBody, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * Link web activity to user
     *
     * @remarks
     * 💡 You don't need to use this endpoint if you use our JavaScript snippet in your application.
     *
     * This endpoint is used to link web activity to a user in your application. This will help you discover which channels and campaigns work best.
     *
     * When our JavaScript snippet is embedded on your website, blog or landing pages, a cookie named "__journey" will be set.
     *
     * This will only work if your website and application are under the same top level domain.
     *
     * Website, blog or landing pages
     * * www.my-domain.tld
     * * blog.my-domain.tld
     * * landing-page.my-domain.tld
     *
     * Application
     * * app.my-domain.tld
     *
     * The cookie on my-domain.tld will also be send to your app domain.
     *
     * You should call this endpoint after the user succesfully logged in (so that you know the user's ID). Use the value of the cookie as device ID.
     */
    link(req: operations.LinkRequestBody, config?: AxiosRequestConfig): Promise<operations.LinkResponse>;
    /**
     * Create or update user
     *
     * @remarks
     * Endpoint to create or update a user.
     */
    upsertUser(req: operations.UpsertUserRequestBody, config?: AxiosRequestConfig): Promise<operations.UpsertUserResponse>;
}

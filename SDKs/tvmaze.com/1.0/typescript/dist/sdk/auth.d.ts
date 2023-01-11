import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Auth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAuthValidate - Validate your authentication credentials
     *
     * If the credentials supplied as HTTP basic are valid, the user's level of premium - if any - is returned.
    **/
    getAuthValidate(config?: AxiosRequestConfig): Promise<operations.GetAuthValidateResponse>;
    /**
     * postAuthPoll - Poll whether an authentication request was confirmed
     *
     * Using the token acquired in the `start` endpoint, you can start polling this endpoint once every 10 seconds.
     *
     * When the user has confirmed the authentication request on their end, this endpoint will return the user's API key that you can use in subsequent authenticated endpoints. Note that it'll do so only once, subsequent requests after the initial 200 response will return a 404.
     *
     * For as long as the user did not yet confirm their authentication request, this endpoint will return a 403.
     *
    **/
    postAuthPoll(req: operations.PostAuthPollRequest, config?: AxiosRequestConfig): Promise<operations.PostAuthPollResponse>;
    /**
     * postAuthStart - Start an authentication request
     *
     * If you want to access the TVmaze API on behalf of a user without querying them for their password, use this endpoint.
     *
     * To get started, send a POST request containing the user's email address. The response will contain a `token`, which you can use as input to the `poll` endpoint. The user will receive an email prompting them to confirm the authentication request.
     *
     * Alternatively, if you expect the user to be logged in to TVmaze on the device they are currently interacting with, you can set `email_confirmation` to false and redirect them to the `confirm_url` URL. If they are logged in to TVmaze, they will be able to confirm the authentication request instantly.
     *
    **/
    postAuthStart(req: operations.PostAuthStartRequest, config?: AxiosRequestConfig): Promise<operations.PostAuthStartResponse>;
}

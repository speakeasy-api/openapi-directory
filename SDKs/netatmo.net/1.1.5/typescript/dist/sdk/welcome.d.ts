import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Welcome specific methods
 */
export declare class Welcome {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Links a callback url to a user.
     *
     */
    addwebhook(req: operations.AddwebhookRequest, security: operations.AddwebhookSecurity, config?: AxiosRequestConfig): Promise<operations.AddwebhookResponse>;
    /**
     * Dissociates a webhook from a user.
     *
     */
    dropwebhook(req: operations.DropwebhookRequest, security: operations.DropwebhookSecurity, config?: AxiosRequestConfig): Promise<operations.DropwebhookResponse>;
    /**
     * Returns the snapshot associated to an event.
     *
     */
    getcamerapicture(req: operations.GetcamerapictureRequest, security: operations.GetcamerapictureSecurity, config?: AxiosRequestConfig): Promise<operations.GetcamerapictureResponse>;
    /**
     * Returns the snapshot associated to an event.
     *
     */
    geteventsuntil(req: operations.GeteventsuntilRequest, security: operations.GeteventsuntilSecurity, config?: AxiosRequestConfig): Promise<operations.GeteventsuntilResponse>;
    /**
     * Returns information about users homes and cameras.
     *
     */
    gethomedata(req: operations.GethomedataRequest, security: operations.GethomedataSecurity, config?: AxiosRequestConfig): Promise<operations.GethomedataResponse>;
    /**
     * Returns most recent events.
     *
     */
    getlasteventof(req: operations.GetlasteventofRequest, security: operations.GetlasteventofSecurity, config?: AxiosRequestConfig): Promise<operations.GetlasteventofResponse>;
    /**
     * Returns previous events.
     *
     */
    getnextevents(req: operations.GetnexteventsRequest, security: operations.GetnexteventsSecurity, config?: AxiosRequestConfig): Promise<operations.GetnexteventsResponse>;
    /**
     * Sets a person as 'Away' or the Home as 'Empty'. The event will be added to the user’s timeline.
     *
     */
    setpersonsaway(req: operations.SetpersonsawayRequest, security: operations.SetpersonsawaySecurity, config?: AxiosRequestConfig): Promise<operations.SetpersonsawayResponse>;
    /**
     * Sets a person as 'At home'.
     *
     */
    setpersonshome(req: operations.SetpersonshomeRequest, security: operations.SetpersonshomeSecurity, config?: AxiosRequestConfig): Promise<operations.SetpersonshomeResponse>;
}

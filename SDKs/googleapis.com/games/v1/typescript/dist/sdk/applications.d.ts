import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Applications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.
     */
    gamesApplicationsGet(req: operations.GamesApplicationsGetRequest, security: operations.GamesApplicationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.GamesApplicationsGetResponse>;
    /**
     * Returns a URL for the requested end point type.
     */
    gamesApplicationsGetEndPoint(req: operations.GamesApplicationsGetEndPointRequest, security: operations.GamesApplicationsGetEndPointSecurity, config?: AxiosRequestConfig): Promise<operations.GamesApplicationsGetEndPointResponse>;
    /**
     * Indicate that the currently authenticated user is playing your application.
     */
    gamesApplicationsPlayed(req: operations.GamesApplicationsPlayedRequest, security: operations.GamesApplicationsPlayedSecurity, config?: AxiosRequestConfig): Promise<operations.GamesApplicationsPlayedResponse>;
    /**
     * Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.
     */
    gamesApplicationsVerify(req: operations.GamesApplicationsVerifyRequest, security: operations.GamesApplicationsVerifySecurity, config?: AxiosRequestConfig): Promise<operations.GamesApplicationsVerifyResponse>;
}

import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.json2video.com/v2"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Create and edit awesome videos programmatically
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Get the status of your movies
     *
     * @remarks
     * Get the status any of your movies by passing your project ID in the <code>project</code> query parameter. You can get your project ID from the response of the POST request.
     */
    getMovies(config?: AxiosRequestConfig): Promise<operations.GetMoviesResponse>;
    /**
     * Create a new movie
     *
     * @remarks
     * Submit a new movie rendering job.
     */
    newMovie(req: shared.Movie, config?: AxiosRequestConfig): Promise<operations.NewMovieResponse>;
}

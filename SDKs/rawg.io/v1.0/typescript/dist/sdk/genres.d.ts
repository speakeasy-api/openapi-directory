import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Genres {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of video game genres.
     */
    genresList(req: operations.GenresListRequest, config?: AxiosRequestConfig): Promise<operations.GenresListResponse>;
    /**
     * Get details of the genre.
     */
    genresRead(req: operations.GenresReadRequest, config?: AxiosRequestConfig): Promise<operations.GenresReadResponse>;
}

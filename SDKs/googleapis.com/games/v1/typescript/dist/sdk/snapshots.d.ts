import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Snapshots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the metadata for a given snapshot ID.
     */
    gamesSnapshotsGet(req: operations.GamesSnapshotsGetRequest, security: operations.GamesSnapshotsGetSecurity, config?: AxiosRequestConfig): Promise<operations.GamesSnapshotsGetResponse>;
    /**
     * Retrieves a list of snapshots created by your application for the player corresponding to the player ID.
     */
    gamesSnapshotsList(req: operations.GamesSnapshotsListRequest, security: operations.GamesSnapshotsListSecurity, config?: AxiosRequestConfig): Promise<operations.GamesSnapshotsListResponse>;
}

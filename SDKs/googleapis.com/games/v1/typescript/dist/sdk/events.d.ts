import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Events {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a list showing the current progress on events in this application for the currently authenticated user.
     */
    gamesEventsListByPlayer(req: operations.GamesEventsListByPlayerRequest, security: operations.GamesEventsListByPlayerSecurity, config?: AxiosRequestConfig): Promise<operations.GamesEventsListByPlayerResponse>;
    /**
     * Returns a list of the event definitions in this application.
     */
    gamesEventsListDefinitions(req: operations.GamesEventsListDefinitionsRequest, security: operations.GamesEventsListDefinitionsSecurity, config?: AxiosRequestConfig): Promise<operations.GamesEventsListDefinitionsResponse>;
    /**
     * Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.
     */
    gamesEventsRecord(req: operations.GamesEventsRecordRequest, security: operations.GamesEventsRecordSecurity, config?: AxiosRequestConfig): Promise<operations.GamesEventsRecordResponse>;
}

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
     * Delete event
     *
     * @remarks
     * Deletes an event by its ID.
     */
    deleteEventsId(req: operations.DeleteEventsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEventsIdResponse>;
    /**
     * Get event
     *
     * @remarks
     * Gets a particular event by its ID.
     */
    getEventsId(req: operations.GetEventsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsIdResponse>;
    /**
     * List events in scenario.
     *
     * @remarks
     * Lists events belonging to a scenario by their ID.
     */
    getScenariosIdEvents(req: operations.GetScenariosIdEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetScenariosIdEventsResponse>;
    /**
     * List events in user.
     *
     * @remarks
     * Lists events belonging to a user by their ID.
     */
    getUsersIdEvents(req: operations.GetUsersIdEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdEventsResponse>;
    /**
     * Create event in scenario
     *
     * @remarks
     * Creates an event in a scenario by its ID.
     */
    postScenariosIdEvents(req: operations.PostScenariosIdEventsRequest, config?: AxiosRequestConfig): Promise<operations.PostScenariosIdEventsResponse>;
    /**
     * Update event
     *
     * @remarks
     * Updates an event by its ID.
     */
    putEventsId(req: operations.PutEventsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutEventsIdResponse>;
}

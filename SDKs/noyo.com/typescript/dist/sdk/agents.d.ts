import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Agents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create new Agent Contact
     *
     * @remarks
     * Creates a new agent contact for an agent
     */
    createAgentContact(req: operations.CreateAgentContactRequest, config?: AxiosRequestConfig): Promise<operations.CreateAgentContactResponse>;
    /**
     * Create new Agent Location
     *
     * @remarks
     * Creates a new agent location for an agent
     */
    createAgentLocation(req: operations.CreateAgentLocationRequest, config?: AxiosRequestConfig): Promise<operations.CreateAgentLocationResponse>;
    /**
     * Create new Agent
     *
     * @remarks
     * Create a new agent for a group application
     */
    createApplicationAgent(req: operations.CreateApplicationAgentRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationAgentResponse>;
    /**
     * Edit an Agent
     *
     * @remarks
     * Edit an agent based on the ID provided. The version parameter must match the latest agent version.
     */
    editAgent(req: operations.EditAgentRequest, config?: AxiosRequestConfig): Promise<operations.EditAgentResponse>;
    /**
     * Edit an Agent Contact
     *
     * @remarks
     * Edit an agent contact based on the ID provided. The version parameter must match the latest agent contact version.
     */
    editAgentContact(req: operations.EditAgentContactRequest, config?: AxiosRequestConfig): Promise<operations.EditAgentContactResponse>;
    /**
     * Edit an Agent Location
     *
     * @remarks
     * Edit an agent location based on the ID provided. The version parameter must match the latest agent location version.
     */
    editAgentLocation(req: operations.EditAgentLocationRequest, config?: AxiosRequestConfig): Promise<operations.EditAgentLocationResponse>;
    /**
     * Get Agent
     *
     * @remarks
     * Returns the latest version of a single agent based on the ID provided
     */
    getAgent(req: operations.GetAgentRequest, config?: AxiosRequestConfig): Promise<operations.GetAgentResponse>;
    /**
     * Get Agent
     *
     * @remarks
     * Returns the latest version of a single agent based on the ID provided
     */
    getAgentContact(req: operations.GetAgentContactRequest, config?: AxiosRequestConfig): Promise<operations.GetAgentContactResponse>;
    /**
     * Get Agent Contacts
     *
     * @remarks
     * Returns a list of all contacts for the given agent
     */
    getAgentContacts(req: operations.GetAgentContactsRequest, config?: AxiosRequestConfig): Promise<operations.GetAgentContactsResponse>;
    /**
     * Get Agent
     *
     * @remarks
     * Returns the latest version of a single agent based on the ID provided
     */
    getAgentLocation(req: operations.GetAgentLocationRequest, config?: AxiosRequestConfig): Promise<operations.GetAgentLocationResponse>;
    /**
     * Get Agent Locations
     *
     * @remarks
     * Returns a list of all locations for the given agent
     */
    getAgentLocations(req: operations.GetAgentLocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetAgentLocationsResponse>;
    /**
     * Get Application Agents
     *
     * @remarks
     * Returns a list of all agents for the given application
     */
    getApplicationAgents(req: operations.GetApplicationAgentsRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationAgentsResponse>;
}

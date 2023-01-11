import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Agents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createAgentContact - Create new Agent Contact
     *
     * Creates a new agent contact for an agent
    **/
    createAgentContact(req: operations.CreateAgentContactRequest, config?: AxiosRequestConfig): Promise<operations.CreateAgentContactResponse>;
    /**
     * createAgentLocation - Create new Agent Location
     *
     * Creates a new agent location for an agent
    **/
    createAgentLocation(req: operations.CreateAgentLocationRequest, config?: AxiosRequestConfig): Promise<operations.CreateAgentLocationResponse>;
    /**
     * createApplicationAgent - Create new Agent
     *
     * Create a new agent for a group application
    **/
    createApplicationAgent(req: operations.CreateApplicationAgentRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationAgentResponse>;
    /**
     * editAgent - Edit an Agent
     *
     * Edit an agent based on the ID provided. The version parameter must match the latest agent version.
    **/
    editAgent(req: operations.EditAgentRequest, config?: AxiosRequestConfig): Promise<operations.EditAgentResponse>;
    /**
     * editAgentContact - Edit an Agent Contact
     *
     * Edit an agent contact based on the ID provided. The version parameter must match the latest agent contact version.
    **/
    editAgentContact(req: operations.EditAgentContactRequest, config?: AxiosRequestConfig): Promise<operations.EditAgentContactResponse>;
    /**
     * editAgentLocation - Edit an Agent Location
     *
     * Edit an agent location based on the ID provided. The version parameter must match the latest agent location version.
    **/
    editAgentLocation(req: operations.EditAgentLocationRequest, config?: AxiosRequestConfig): Promise<operations.EditAgentLocationResponse>;
    /**
     * getAgent - Get Agent
     *
     * Returns the latest version of a single agent based on the ID provided
    **/
    getAgent(req: operations.GetAgentRequest, config?: AxiosRequestConfig): Promise<operations.GetAgentResponse>;
    /**
     * getAgentContact - Get Agent
     *
     * Returns the latest version of a single agent based on the ID provided
    **/
    getAgentContact(req: operations.GetAgentContactRequest, config?: AxiosRequestConfig): Promise<operations.GetAgentContactResponse>;
    /**
     * getAgentContacts - Get Agent Contacts
     *
     * Returns a list of all contacts for the given agent
    **/
    getAgentContacts(req: operations.GetAgentContactsRequest, config?: AxiosRequestConfig): Promise<operations.GetAgentContactsResponse>;
    /**
     * getAgentLocation - Get Agent
     *
     * Returns the latest version of a single agent based on the ID provided
    **/
    getAgentLocation(req: operations.GetAgentLocationRequest, config?: AxiosRequestConfig): Promise<operations.GetAgentLocationResponse>;
    /**
     * getAgentLocations - Get Agent Locations
     *
     * Returns a list of all locations for the given agent
    **/
    getAgentLocations(req: operations.GetAgentLocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetAgentLocationsResponse>;
    /**
     * getApplicationAgents - Get Application Agents
     *
     * Returns a list of all agents for the given application
    **/
    getApplicationAgents(req: operations.GetApplicationAgentsRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationAgentsResponse>;
}

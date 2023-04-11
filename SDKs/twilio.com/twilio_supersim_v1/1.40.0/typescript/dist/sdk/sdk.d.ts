import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://supersim.twilio.com"];
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
 * This is the public Twilio REST API.
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
     * Order an eSIM Profile.
     */
    createEsimProfile(req: operations.CreateEsimProfileCreateEsimProfileRequest, security: operations.CreateEsimProfileSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateEsimProfileResponse>;
    /**
     * Create a Fleet
     */
    createFleet(req: operations.CreateFleetCreateFleetRequest, security: operations.CreateFleetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateFleetResponse>;
    /**
     * Send an IP Command to a Super SIM.
     */
    createIpCommand(req: operations.CreateIpCommandCreateIpCommandRequest, security: operations.CreateIpCommandSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateIpCommandResponse>;
    /**
     * Create a new Network Access Profile
     */
    createNetworkAccessProfile(req: operations.CreateNetworkAccessProfileCreateNetworkAccessProfileRequest, security: operations.CreateNetworkAccessProfileSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateNetworkAccessProfileResponse>;
    /**
     * Add a Network resource to the Network Access Profile resource.
     */
    createNetworkAccessProfileNetwork(req: operations.CreateNetworkAccessProfileNetworkRequest, security: operations.CreateNetworkAccessProfileNetworkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateNetworkAccessProfileNetworkResponse>;
    /**
     * Register a Super SIM to your Account
     */
    createSim(req: operations.CreateSimCreateSimRequest, security: operations.CreateSimSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSimResponse>;
    /**
     * Send SMS Command to a Sim.
     */
    createSmsCommand(req: operations.CreateSmsCommandCreateSmsCommandRequest, security: operations.CreateSmsCommandSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSmsCommandResponse>;
    /**
     * Remove a Network resource from the Network Access Profile resource's.
     */
    deleteNetworkAccessProfileNetwork(req: operations.DeleteNetworkAccessProfileNetworkRequest, security: operations.DeleteNetworkAccessProfileNetworkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkAccessProfileNetworkResponse>;
    /**
     * Fetch an eSIM Profile.
     */
    fetchEsimProfile(req: operations.FetchEsimProfileRequest, security: operations.FetchEsimProfileSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchEsimProfileResponse>;
    /**
     * Fetch a Fleet instance from your account.
     */
    fetchFleet(req: operations.FetchFleetRequest, security: operations.FetchFleetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchFleetResponse>;
    /**
     * Fetch IP Command instance from your account.
     */
    fetchIpCommand(req: operations.FetchIpCommandRequest, security: operations.FetchIpCommandSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchIpCommandResponse>;
    /**
     * Fetch a Network resource.
     */
    fetchNetwork(req: operations.FetchNetworkRequest, security: operations.FetchNetworkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchNetworkResponse>;
    /**
     * Fetch a Network Access Profile instance from your account.
     */
    fetchNetworkAccessProfile(req: operations.FetchNetworkAccessProfileRequest, security: operations.FetchNetworkAccessProfileSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchNetworkAccessProfileResponse>;
    /**
     * Fetch a Network Access Profile resource's Network resource.
     */
    fetchNetworkAccessProfileNetwork(req: operations.FetchNetworkAccessProfileNetworkRequest, security: operations.FetchNetworkAccessProfileNetworkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchNetworkAccessProfileNetworkResponse>;
    /**
     * Fetch a Super SIM instance from your account.
     */
    fetchSim(req: operations.FetchSimRequest, security: operations.FetchSimSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSimResponse>;
    /**
     * Fetch SMS Command instance from your account.
     */
    fetchSmsCommand(req: operations.FetchSmsCommandRequest, security: operations.FetchSmsCommandSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSmsCommandResponse>;
    /**
     * Retrieve a list of Billing Periods for a Super SIM.
     */
    listBillingPeriod(req: operations.ListBillingPeriodRequest, security: operations.ListBillingPeriodSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListBillingPeriodResponse>;
    /**
     * Retrieve a list of eSIM Profiles.
     */
    listEsimProfile(req: operations.ListEsimProfileRequest, security: operations.ListEsimProfileSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListEsimProfileResponse>;
    /**
     * Retrieve a list of Fleets from your account.
     */
    listFleet(req: operations.ListFleetRequest, security: operations.ListFleetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListFleetResponse>;
    /**
     * Retrieve a list of IP Commands from your account.
     */
    listIpCommand(req: operations.ListIpCommandRequest, security: operations.ListIpCommandSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListIpCommandResponse>;
    /**
     * Retrieve a list of Network resources.
     */
    listNetwork(req: operations.ListNetworkRequest, security: operations.ListNetworkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListNetworkResponse>;
    /**
     * Retrieve a list of Network Access Profiles from your account.
     */
    listNetworkAccessProfile(req: operations.ListNetworkAccessProfileRequest, security: operations.ListNetworkAccessProfileSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListNetworkAccessProfileResponse>;
    /**
     * Retrieve a list of Network Access Profile resource's Network resource.
     */
    listNetworkAccessProfileNetwork(req: operations.ListNetworkAccessProfileNetworkRequest, security: operations.ListNetworkAccessProfileNetworkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListNetworkAccessProfileNetworkResponse>;
    /**
     * Retrieve a list of Settings Updates.
     */
    listSettingsUpdate(req: operations.ListSettingsUpdateRequest, security: operations.ListSettingsUpdateSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSettingsUpdateResponse>;
    /**
     * Retrieve a list of Super SIMs from your account.
     */
    listSim(req: operations.ListSimRequest, security: operations.ListSimSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSimResponse>;
    /**
     * Retrieve a list of IP Addresses for the given Super SIM.
     */
    listSimIpAddress(req: operations.ListSimIpAddressRequest, security: operations.ListSimIpAddressSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSimIpAddressResponse>;
    /**
     * Retrieve a list of SMS Commands from your account.
     */
    listSmsCommand(req: operations.ListSmsCommandRequest, security: operations.ListSmsCommandSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSmsCommandResponse>;
    /**
     * List UsageRecords
     */
    listUsageRecord(req: operations.ListUsageRecordRequest, security: operations.ListUsageRecordSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordResponse>;
    /**
     * Updates the given properties of a Super SIM Fleet instance from your account.
     */
    updateFleet(req: operations.UpdateFleetRequest, security: operations.UpdateFleetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateFleetResponse>;
    /**
     * Updates the given properties of a Network Access Profile in your account.
     */
    updateNetworkAccessProfile(req: operations.UpdateNetworkAccessProfileRequest, security: operations.UpdateNetworkAccessProfileSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkAccessProfileResponse>;
    /**
     * Updates the given properties of a Super SIM instance from your account.
     */
    updateSim(req: operations.UpdateSimRequest, security: operations.UpdateSimSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSimResponse>;
}

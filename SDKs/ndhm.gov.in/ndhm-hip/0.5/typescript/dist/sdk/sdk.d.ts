import { ConsentFlow } from "./consentflow";
import { DataFlow } from "./dataflow";
import { DataTransfer } from "./datatransfer";
import { Discovery } from "./discovery";
import { Gateway } from "./gateway";
import { Link } from "./link";
import { Monitoring } from "./monitoring";
import { PatientNotification } from "./patientnotification";
import { Profile } from "./profile";
import { UserAuth } from "./userauth";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://dev.ndhm.gov.in/gateway"];
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
 * The following are the specifications for the APIs to be implemented at the Health Repository end if an entity is only serving the role of a HIP. The specs are essentially duplicates from the Gateway and Health Repository, but put together so as to make it clear to *HIPs* which set of APIs they should implement to participate in the network.
 *
 * @remarks
 *
 */
export declare class SDK {
    gateway: Gateway;
    consentFlow: ConsentFlow;
    dataFlow: DataFlow;
    dataTransfer: DataTransfer;
    discovery: Discovery;
    link: Link;
    monitoring: Monitoring;
    patientNotification: PatientNotification;
    profile: Profile;
    userAuth: UserAuth;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}

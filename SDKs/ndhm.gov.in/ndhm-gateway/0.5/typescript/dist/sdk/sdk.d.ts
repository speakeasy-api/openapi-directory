import { CmFacing } from "./cmfacing";
import { ConsentFlow } from "./consentflow";
import { DataFlow } from "./dataflow";
import { Discovery } from "./discovery";
import { HipFacing } from "./hipfacing";
import { HiuFacing } from "./hiufacing";
import { Identification } from "./identification";
import { Link } from "./link";
import { Monitoring } from "./monitoring";
import { PatientNotification } from "./patientnotification";
import { Profile } from "./profile";
import { Services } from "./services";
import { Sessions } from "./sessions";
import { Subscriptions } from "./subscriptions";
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
 * Gateway is the hub that routes/orchestrates the interaction between consent managers and API bridges. There are 5 categories of APIs; discovery, link, consent flow, data flow and  monitoring. To reflect the consumers of APIs, the above apis are also categorized under cm facing, hiu facing and hip facing
 *
 * @remarks
 *
 */
export declare class SDK {
    cmFacing: CmFacing;
    consentFlow: ConsentFlow;
    dataFlow: DataFlow;
    discovery: Discovery;
    hipFacing: HipFacing;
    hiuFacing: HiuFacing;
    identification: Identification;
    link: Link;
    monitoring: Monitoring;
    patientNotification: PatientNotification;
    profile: Profile;
    services: Services;
    sessions: Sessions;
    subscriptions: Subscriptions;
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

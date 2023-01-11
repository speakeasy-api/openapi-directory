import { AxiosInstance } from "axios";
import { Gateway } from "./gateway";
import { ConsentFlow } from "./consentflow";
import { DataFlow } from "./dataflow";
import { DataTransfer } from "./datatransfer";
import { Discovery } from "./discovery";
import { Link } from "./link";
import { Monitoring } from "./monitoring";
import { PatientNotification } from "./patientnotification";
import { Profile } from "./profile";
import { UserAuth } from "./userauth";
export declare const ServerList: readonly ["https://dev.ndhm.gov.in/gateway"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}

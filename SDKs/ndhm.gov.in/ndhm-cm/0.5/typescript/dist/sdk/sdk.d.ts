import { Consent } from "./consent";
import { DataFlow } from "./dataflow";
import { Discovery } from "./discovery";
import { HipFacing } from "./hipfacing";
import { HiuFacing } from "./hiufacing";
import { Identification } from "./identification";
import { Link } from "./link";
import { Monitoring } from "./monitoring";
import { Profile } from "./profile";
import { Subscriptions } from "./subscriptions";
import { UserAuth } from "./userauth";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://dev.ndhm.gov.in/cm"];
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
 * Entity which provides health information aggregation services to customers of health care services.
 *
 * @remarks
 * It enables customers to fetch their health information from one or more Health Information Providers
 * (e.g., Hospitals, Diagnostic Labs, Medical Device Companies), based on their explicit Consent and to share such
 * aggregated information with Health Information Users i.e. entities in need of such data (e.g., Insurers,
 * Doctors, Medical Researchers).
 *
 * # Specifications
 * 1. This document maintains only the Health Information Gateway relevant APIs.
 *
 */
export declare class SDK {
    consent: Consent;
    dataFlow: DataFlow;
    discovery: Discovery;
    hipFacing: HipFacing;
    hiuFacing: HiuFacing;
    identification: Identification;
    link: Link;
    monitoring: Monitoring;
    profile: Profile;
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

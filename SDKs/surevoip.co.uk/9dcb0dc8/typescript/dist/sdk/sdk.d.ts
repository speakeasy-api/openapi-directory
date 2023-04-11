import { Announcements } from "./announcements";
import { Areacodes } from "./areacodes";
import { Billing } from "./billing";
import { Calls } from "./calls";
import { Charges } from "./charges";
import { Contacts } from "./contacts";
import { Customers } from "./customers";
import { Echo } from "./echo";
import { Faxes } from "./faxes";
import { Global } from "./global";
import { Hosted } from "./hosted";
import { Mobile } from "./mobile";
import * as shared from "./models/shared";
import { Numbers } from "./numbers";
import { Partners } from "./partners";
import { Porting } from "./porting";
import { Sip } from "./sip";
import { Sms } from "./sms";
import { Support } from "./support";
import { Topups } from "./topups";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.surevoip.co.uk", "https://sandbox.surevoip.co.uk"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * # Introduction
 *
 * @remarks
 * Welcome to the SureVoIP RESTful hypermedia API (sometimes known as a VoIP REST API, Telecom REST API, SIP API, Hypermedia API or just VoIP API.)
 *
 * The SureVoIP API is a way for you to automate your interaction with the SureVoIP platforms. With the API, you can create your own scripts, applications or mashups which can:
 * * List calls
 * * create customers
 * * search numbers
 * * provision numbers
 * * send SMS texts
 * * create outbound calls
 * * schedule announcements
 * * schedule call hangups with an announcement
 * * subscribe to events/alerts
 * * track calls
 * * retrieve invoices
 * * grab your SIP details
 * * check your IP address
 * * be 100% self-sufficient
 * * and much more!
 *
 *
 * @see {@link https://www.surevoip.co.uk/support/wiki/api_documentation} - SureVoIP API Wiki
 */
export declare class SDK {
    /**
     * Announcements that can be played during or before a call
     */
    announcements: Announcements;
    /**
     * Areacodes of numbers that SureVoIP can supply
     */
    areacodes: Areacodes;
    /**
     * Billing details and invoices
     */
    billing: Billing;
    /**
     * Create phone calls via an API
     */
    calls: Calls;
    /**
     * Create a charge for a customer
     */
    charges: Charges;
    /**
     * Create, List, Updated and Delete Contacts
     */
    contacts: Contacts;
    /**
     * Create, List, Updated and Delete Customers
     */
    customers: Customers;
    /**
     * Echo back your payload
     */
    echo: Echo;
    /**
     * Send faxes - Not in service
     */
    faxes: Faxes;
    global: Global;
    /**
     * Create, List, Updated and Delete Hosted VoIP Customers
     */
    hosted: Hosted;
    /**
     * Create, List, Updated and Delete SIMs
     */
    mobile: Mobile;
    /**
     * Create, List, Updated and Delete Numbers (DDIs)
     */
    numbers: Numbers;
    /**
     * Create, List, Updated and Delete Partners and their customers
     */
    partners: Partners;
    /**
     * Create, List, Updated and Delete Number Porting requests
     */
    porting: Porting;
    /**
     * List SIP details
     */
    sip: Sip;
    /**
     * Send SMS (text messages)
     */
    sms: Sms;
    /**
     * List support details
     */
    support: Support;
    /**
     * Create call credit topups for customers
     */
    topups: Topups;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}

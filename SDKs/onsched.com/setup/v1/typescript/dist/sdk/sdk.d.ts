import { Appointments } from "./appointments";
import { BusinessUsers } from "./businessusers";
import { Calendars } from "./calendars";
import { Companies } from "./companies";
import { Customers } from "./customers";
import { Locations } from "./locations";
import * as shared from "./models/shared";
import { ResourceGroups } from "./resourcegroups";
import { Resources } from "./resources";
import { ServiceGroups } from "./servicegroups";
import { Services } from "./services";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://sandbox-api.onsched.com/"];
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
 * Build secure and scalable custom apps for onboarding and setup. Our flexible API provides many options for configuration.
 *
 * @remarks
 * <br><br>
 * Take the API for a test drive. Just click on the Authorize button below and authenticate.
 * You can access our demo company profile if you are not a customer, or your own profile by using your assigned ClientId and Secret.
 * <br><br>
 * The API has two interfaces, consumer and setup.
 * <ul>
 * <li>
 * The consumer interface provides all the endpoints required for implementing consumer booking flows.
 * </li>
 * <li>
 * The setup interface provides endpoints for profile configuration and setup.
 * </li>
 * </ul>
 * Toggle freely between the two interfaces using the swagger tool bar option labelled 'Select a definition'.
 *
 */
export declare class SDK {
    appointments: Appointments;
    businessUsers: BusinessUsers;
    calendars: Calendars;
    companies: Companies;
    customers: Customers;
    locations: Locations;
    resourceGroups: ResourceGroups;
    resources: Resources;
    serviceGroups: ServiceGroups;
    services: Services;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}

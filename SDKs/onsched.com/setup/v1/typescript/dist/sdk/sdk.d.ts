import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Appointments } from "./appointments";
import { BusinessUsers } from "./businessusers";
import { Calendars } from "./calendars";
import { Companies } from "./companies";
import { Customers } from "./customers";
import { Locations } from "./locations";
import { ResourceGroups } from "./resourcegroups";
import { Resources } from "./resources";
import { Services } from "./services";
import { StripePlans } from "./stripeplans";
export declare const ServerList: readonly ["https://onsched.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    appointments: Appointments;
    businessUsers: BusinessUsers;
    calendars: Calendars;
    companies: Companies;
    customers: Customers;
    locations: Locations;
    resourceGroups: ResourceGroups;
    resources: Resources;
    services: Services;
    stripePlans: StripePlans;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}

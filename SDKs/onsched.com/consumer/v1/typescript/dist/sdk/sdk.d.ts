import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Appointments } from "./appointments";
import { Availability } from "./availability";
import { Customers } from "./customers";
import { Locations } from "./locations";
import { Resources } from "./resources";
import { ServiceGroups } from "./servicegroups";
import { Services } from "./services";
import { Settings } from "./settings";
import { StripePlans } from "./stripeplans";
export declare const ServerList: readonly ["https://onsched.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    appointments: Appointments;
    availability: Availability;
    customers: Customers;
    locations: Locations;
    resources: Resources;
    serviceGroups: ServiceGroups;
    services: Services;
    settings: Settings;
    stripePlans: StripePlans;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}

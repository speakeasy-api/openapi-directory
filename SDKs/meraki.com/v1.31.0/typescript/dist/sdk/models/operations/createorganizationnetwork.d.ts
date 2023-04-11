import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum CreateOrganizationNetworkRequestBodyProductTypesEnum {
    Appliance = "appliance",
    Camera = "camera",
    CellularGateway = "cellularGateway",
    Sensor = "sensor",
    Switch = "switch",
    SystemsManager = "systemsManager",
    Wireless = "wireless"
}
export declare class CreateOrganizationNetworkRequestBody extends SpeakeasyBase {
    /**
     * The ID of the network to copy configuration from. Other provided parameters will override the copied configuration, except type which must match this network's type exactly.
     */
    copyFromNetworkId?: string;
    /**
     * The name of the new network
     */
    name: string;
    /**
     * Add any notes or additional information about this network here.
     */
    notes?: string;
    /**
     * The product type(s) of the new network. If more than one type is included, the network will be a combined network.
     */
    productTypes: CreateOrganizationNetworkRequestBodyProductTypesEnum[];
    /**
     * A list of tags to be applied to the network
     */
    tags?: string[];
    /**
     * The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a>
     */
    timeZone?: string;
}
export declare class CreateOrganizationNetworkRequest extends SpeakeasyBase {
    requestBody: CreateOrganizationNetworkRequestBody;
    organizationId: string;
}
/**
 * Successful operation
 */
export declare class CreateOrganizationNetwork201ApplicationJSON extends SpeakeasyBase {
    /**
     * Enrollment string for the network
     */
    enrollmentString?: string;
    /**
     * Network ID
     */
    id?: string;
    /**
     * If the network is bound to a config template
     */
    isBoundToConfigTemplate?: boolean;
    /**
     * Network name
     */
    name?: string;
    /**
     * Notes for the network
     */
    notes?: string;
    /**
     * Organization ID
     */
    organizationId?: string;
    /**
     * List of the product types that the network supports
     */
    productTypes?: string[];
    /**
     * Network tags
     */
    tags?: string[];
    /**
     * Timezone of the network
     */
    timeZone?: string;
    /**
     * URL to the network Dashboard UI
     */
    url?: string;
}
export declare class CreateOrganizationNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createOrganizationNetwork201ApplicationJSONObject?: CreateOrganizationNetwork201ApplicationJSON;
}

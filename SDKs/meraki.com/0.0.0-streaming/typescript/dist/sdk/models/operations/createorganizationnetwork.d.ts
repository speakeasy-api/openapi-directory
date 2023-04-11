import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateOrganizationNetworkRequestBody extends SpeakeasyBase {
    /**
     * The ID of the network to copy configuration from. Other provided parameters will override the copied configuration, except type which must match this network's type exactly.
     */
    copyFromNetworkId?: string;
    /**
     * Disables the local device status pages (<a target='_blank' href='http://my.meraki.com/'>my.meraki.com, </a><a target='_blank' href='http://ap.meraki.com/'>ap.meraki.com, </a><a target='_blank' href='http://switch.meraki.com/'>switch.meraki.com, </a><a target='_blank' href='http://wired.meraki.com/'>wired.meraki.com</a>). Optional (defaults to false)
     */
    disableMyMerakiCom?: boolean;
    /**
     * Disables access to the device status page (<a target='_blank'>http://[device's LAN IP])</a>. Optional. Can only be set if disableMyMerakiCom is set to false
     */
    disableRemoteStatusPage?: boolean;
    /**
     * The name of the new network
     */
    name: string;
    /**
     * A space-separated list of tags to be applied to the network
     */
    tags?: string;
    /**
     * The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a>
     */
    timeZone?: string;
    /**
     * The type of the new network. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, environmental, or a space-separated list of those for a combined network.
     */
    type: string;
}
export declare class CreateOrganizationNetworkRequest extends SpeakeasyBase {
    requestBody: CreateOrganizationNetworkRequestBody;
    organizationId: string;
}
export declare class CreateOrganizationNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createOrganizationNetwork201ApplicationJSONObject?: Record<string, any>;
}

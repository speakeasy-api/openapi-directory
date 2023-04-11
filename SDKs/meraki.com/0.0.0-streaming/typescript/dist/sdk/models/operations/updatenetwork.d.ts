import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkRequestBody extends SpeakeasyBase {
    /**
     * Disables the local device status pages (<a target='_blank' href='http://my.meraki.com/'>my.meraki.com, </a><a target='_blank' href='http://ap.meraki.com/'>ap.meraki.com, </a><a target='_blank' href='http://switch.meraki.com/'>switch.meraki.com, </a><a target='_blank' href='http://wired.meraki.com/'>wired.meraki.com</a>). Optional (defaults to false)
     */
    disableMyMerakiCom?: boolean;
    /**
     * Disables access to the device status page (<a target='_blank'>http://[device's LAN IP])</a>. Optional. Can only be set if disableMyMerakiCom is set to false
     */
    disableRemoteStatusPage?: boolean;
    /**
     * A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break.
     */
    enrollmentString?: string;
    /**
     * The name of the network
     */
    name?: string;
    /**
     * A space-separated list of tags to be applied to the network
     */
    tags?: string;
    /**
     * The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a>
     */
    timeZone?: string;
}
export declare class UpdateNetworkRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkRequestBody;
    networkId: string;
}
export declare class UpdateNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetwork200ApplicationJSONObject?: Record<string, any>;
}

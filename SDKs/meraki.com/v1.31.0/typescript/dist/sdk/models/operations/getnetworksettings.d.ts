import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSettingsRequest extends SpeakeasyBase {
    networkId: string;
}
/**
 * Privacy settings
 */
export declare class GetNetworkSettings200ApplicationJSONClientPrivacy extends SpeakeasyBase {
    /**
     * The date to expire the data before
     */
    expireDataBefore?: Date;
    /**
     * The number of days, weeks, or months in Epoch time to expire the data before
     */
    expireDataOlderThan?: number;
}
/**
 * A hash of FIPS options applied to the Network
 */
export declare class GetNetworkSettings200ApplicationJSONFips extends SpeakeasyBase {
    /**
     * Enables / disables FIPS on the network.
     */
    enabled?: boolean;
}
/**
 * A hash of Local Status page(s)' authentication options applied to the Network.
 */
export declare class GetNetworkSettings200ApplicationJSONLocalStatusPageAuthentication extends SpeakeasyBase {
    /**
     * Enables / disables the authentication on Local Status page(s).
     */
    enabled?: boolean;
    /**
     * The username used for Local Status Page(s).
     */
    username?: string;
}
/**
 * A hash of Local Status page(s)' authentication options applied to the Network.
 */
export declare class GetNetworkSettings200ApplicationJSONLocalStatusPage extends SpeakeasyBase {
    /**
     * A hash of Local Status page(s)' authentication options applied to the Network.
     */
    authentication?: GetNetworkSettings200ApplicationJSONLocalStatusPageAuthentication;
}
/**
 * A hash of Named VLANs options applied to the Network.
 */
export declare class GetNetworkSettings200ApplicationJSONNamedVlans extends SpeakeasyBase {
    /**
     * Enables / disables Named VLANs on the Network.
     */
    enabled: boolean;
}
/**
 * A hash of SecureConnect options applied to the Network.
 */
export declare class GetNetworkSettings200ApplicationJSONSecurePort extends SpeakeasyBase {
    /**
     * Enables / disables SecureConnect on the network. Optional.
     */
    enabled?: boolean;
}
/**
 * Successful operation
 */
export declare class GetNetworkSettings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Privacy settings
     */
    clientPrivacy?: GetNetworkSettings200ApplicationJSONClientPrivacy;
    /**
     * A hash of FIPS options applied to the Network
     */
    fips?: GetNetworkSettings200ApplicationJSONFips;
    /**
     * A hash of Local Status page(s)' authentication options applied to the Network.
     */
    localStatusPage?: GetNetworkSettings200ApplicationJSONLocalStatusPage;
    /**
     * Enables / disables the local device status pages (<a target='_blank' href='http://my.meraki.com/'>my.meraki.com, </a><a target='_blank' href='http://ap.meraki.com/'>ap.meraki.com, </a><a target='_blank' href='http://switch.meraki.com/'>switch.meraki.com, </a><a target='_blank' href='http://wired.meraki.com/'>wired.meraki.com</a>). Optional (defaults to false)
     */
    localStatusPageEnabled?: boolean;
    /**
     * A hash of Named VLANs options applied to the Network.
     */
    namedVlans?: GetNetworkSettings200ApplicationJSONNamedVlans;
    /**
     * Enables / disables access to the device status page (<a target='_blank'>http://[device's LAN IP])</a>. Optional. Can only be set if localStatusPageEnabled is set to true
     */
    remoteStatusPageEnabled?: boolean;
    /**
     * A hash of SecureConnect options applied to the Network.
     */
    securePort?: GetNetworkSettings200ApplicationJSONSecurePort;
}
export declare class GetNetworkSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSettings200ApplicationJSONObject?: GetNetworkSettings200ApplicationJSON;
}

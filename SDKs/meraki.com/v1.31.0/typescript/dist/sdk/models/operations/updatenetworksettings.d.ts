import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * A hash of Local Status page(s)' authentication options applied to the Network.
 */
export declare class UpdateNetworkSettingsRequestBodyLocalStatusPageAuthentication extends SpeakeasyBase {
    /**
     * Enables / disables the authentication on Local Status page(s).
     */
    enabled?: boolean;
    /**
     * The password used for Local Status Page(s). Set this to null to clear the password.
     */
    password?: string;
}
/**
 * A hash of Local Status page(s)' authentication options applied to the Network.
 */
export declare class UpdateNetworkSettingsRequestBodyLocalStatusPage extends SpeakeasyBase {
    /**
     * A hash of Local Status page(s)' authentication options applied to the Network.
     */
    authentication?: UpdateNetworkSettingsRequestBodyLocalStatusPageAuthentication;
}
/**
 * A hash of SecureConnect options applied to the Network.
 */
export declare class UpdateNetworkSettingsRequestBodySecurePort extends SpeakeasyBase {
    /**
     * Enables / disables SecureConnect on the network. Optional.
     */
    enabled?: boolean;
}
export declare class UpdateNetworkSettingsRequestBody extends SpeakeasyBase {
    /**
     * A hash of Local Status page(s)' authentication options applied to the Network.
     */
    localStatusPage?: UpdateNetworkSettingsRequestBodyLocalStatusPage;
    /**
     * Enables / disables the local device status pages (<a target='_blank' href='http://my.meraki.com/'>my.meraki.com, </a><a target='_blank' href='http://ap.meraki.com/'>ap.meraki.com, </a><a target='_blank' href='http://switch.meraki.com/'>switch.meraki.com, </a><a target='_blank' href='http://wired.meraki.com/'>wired.meraki.com</a>). Optional (defaults to false)
     */
    localStatusPageEnabled?: boolean;
    /**
     * Enables / disables access to the device status page (<a target='_blank'>http://[device's LAN IP])</a>. Optional. Can only be set if localStatusPageEnabled is set to true
     */
    remoteStatusPageEnabled?: boolean;
    /**
     * A hash of SecureConnect options applied to the Network.
     */
    securePort?: UpdateNetworkSettingsRequestBodySecurePort;
}
export declare class UpdateNetworkSettingsRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSettingsRequestBody;
    networkId: string;
}
/**
 * Privacy settings
 */
export declare class UpdateNetworkSettings200ApplicationJSONClientPrivacy extends SpeakeasyBase {
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
export declare class UpdateNetworkSettings200ApplicationJSONFips extends SpeakeasyBase {
    /**
     * Enables / disables FIPS on the network.
     */
    enabled?: boolean;
}
/**
 * A hash of Local Status page(s)' authentication options applied to the Network.
 */
export declare class UpdateNetworkSettings200ApplicationJSONLocalStatusPageAuthentication extends SpeakeasyBase {
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
export declare class UpdateNetworkSettings200ApplicationJSONLocalStatusPage extends SpeakeasyBase {
    /**
     * A hash of Local Status page(s)' authentication options applied to the Network.
     */
    authentication?: UpdateNetworkSettings200ApplicationJSONLocalStatusPageAuthentication;
}
/**
 * A hash of Named VLANs options applied to the Network.
 */
export declare class UpdateNetworkSettings200ApplicationJSONNamedVlans extends SpeakeasyBase {
    /**
     * Enables / disables Named VLANs on the Network.
     */
    enabled: boolean;
}
/**
 * A hash of SecureConnect options applied to the Network.
 */
export declare class UpdateNetworkSettings200ApplicationJSONSecurePort extends SpeakeasyBase {
    /**
     * Enables / disables SecureConnect on the network. Optional.
     */
    enabled?: boolean;
}
/**
 * Successful operation
 */
export declare class UpdateNetworkSettings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Privacy settings
     */
    clientPrivacy?: UpdateNetworkSettings200ApplicationJSONClientPrivacy;
    /**
     * A hash of FIPS options applied to the Network
     */
    fips?: UpdateNetworkSettings200ApplicationJSONFips;
    /**
     * A hash of Local Status page(s)' authentication options applied to the Network.
     */
    localStatusPage?: UpdateNetworkSettings200ApplicationJSONLocalStatusPage;
    /**
     * Enables / disables the local device status pages (<a target='_blank' href='http://my.meraki.com/'>my.meraki.com, </a><a target='_blank' href='http://ap.meraki.com/'>ap.meraki.com, </a><a target='_blank' href='http://switch.meraki.com/'>switch.meraki.com, </a><a target='_blank' href='http://wired.meraki.com/'>wired.meraki.com</a>). Optional (defaults to false)
     */
    localStatusPageEnabled?: boolean;
    /**
     * A hash of Named VLANs options applied to the Network.
     */
    namedVlans?: UpdateNetworkSettings200ApplicationJSONNamedVlans;
    /**
     * Enables / disables access to the device status page (<a target='_blank'>http://[device's LAN IP])</a>. Optional. Can only be set if localStatusPageEnabled is set to true
     */
    remoteStatusPageEnabled?: boolean;
    /**
     * A hash of SecureConnect options applied to the Network.
     */
    securePort?: UpdateNetworkSettings200ApplicationJSONSecurePort;
}
export declare class UpdateNetworkSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSettings200ApplicationJSONObject?: UpdateNetworkSettings200ApplicationJSON;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IPBlocklistDownloadRequest extends SpeakeasyBase {
    /**
     * Output IPs using CIDR notation. This option should be preferred but is off by default for backwards compatibility
     */
    cidr?: boolean;
    /**
     * The data format. Can be either CSV or TXT
     */
    format?: string;
    /**
     * Include public VPN provider addresses, this option is only available for Tier 3 or higher accounts. Adds any IPs which are solely listed as VPN providers, IPs that are listed on multiple sensors will still be included without enabling this option. <br><b>WARNING</b>: This adds at least an additional 8 million IP addresses to the download if not using CIDR notation
     */
    includeVpn?: boolean;
    /**
     * Output the IPv6 version of the blocklist, the default is to output IPv4 only. Note that this option enables CIDR notation too as this is the only notation currently supported for IPv6
     */
    ip6?: boolean;
}
export declare class IPBlocklistDownloadResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    ipBlocklistDownload200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

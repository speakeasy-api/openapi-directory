import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
 */
export declare class LinkedInterconnectAttachmentsInput extends SpeakeasyBase {
    /**
     * A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations).
     */
    siteToSiteDataTransfer?: boolean;
    /**
     * The URIs of linked interconnect attachment resources
     */
    uris?: string[];
}
/**
 * A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
 */
export declare class LinkedInterconnectAttachments extends SpeakeasyBase {
    /**
     * A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations).
     */
    siteToSiteDataTransfer?: boolean;
    /**
     * The URIs of linked interconnect attachment resources
     */
    uris?: string[];
    /**
     * Output only. The VPC network where these VLAN attachments are located.
     */
    vpcNetwork?: string;
}

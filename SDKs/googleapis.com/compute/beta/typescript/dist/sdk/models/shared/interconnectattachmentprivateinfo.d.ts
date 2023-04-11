import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information for an interconnect attachment when this belongs to an interconnect of type DEDICATED.
 */
export declare class InterconnectAttachmentPrivateInfo extends SpeakeasyBase {
    /**
     * [Output Only] 802.1q encapsulation tag to be used for traffic between Google and the customer, going to and from this network and region.
     */
    tag8021q?: number;
}

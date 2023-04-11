import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DNS domain suffix for which requests originating in the producer VPC network are resolved in the associated consumer VPC network.
 */
export declare class PeeredDnsDomain extends SpeakeasyBase {
    /**
     * The DNS domain name suffix e.g. `example.com.`. Cloud DNS requires that a DNS suffix ends with a trailing dot.
     */
    dnsSuffix?: string;
    /**
     * User assigned name for this resource. Must be unique within the consumer network. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes.
     */
    name?: string;
}

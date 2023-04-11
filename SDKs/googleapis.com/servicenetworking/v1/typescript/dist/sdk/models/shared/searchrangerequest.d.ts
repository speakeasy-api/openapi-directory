import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to search for an unused range within allocated ranges.
 */
export declare class SearchRangeRequest extends SpeakeasyBase {
    /**
     * Required. The prefix length of the IP range. Use usual CIDR range notation. For example, '30' to find unused x.x.x.x/30 CIDR range. Actual range will be determined using allocated range for the consumer peered network and returned in the result.
     */
    ipPrefixLength?: number;
    /**
     * Network name in the consumer project. This network must have been already peered with a shared VPC network using CreateConnection method. Must be in a form 'projects/{project}/global/networks/{network}'. {project} is a project number, as in '12345' {network} is network name.
     */
    network?: string;
}

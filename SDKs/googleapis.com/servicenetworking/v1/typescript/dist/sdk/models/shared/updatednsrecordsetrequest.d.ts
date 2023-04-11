import { SpeakeasyBase } from "../../../internal/utils";
import { DnsRecordSet } from "./dnsrecordset";
/**
 * Request to update a record set from a private managed DNS zone in the shared producer host project. The name, type, ttl, and data values of the existing record set must all exactly match an existing record set in the specified zone.
 */
export declare class UpdateDnsRecordSetRequest extends SpeakeasyBase {
    /**
     * Required. The network that the consumer is using to connect with services. Must be in the form of projects/{project}/global/networks/{network} {project} is the project number, as in '12345' {network} is the network name.
     */
    consumerNetwork?: string;
    /**
     * Represents a DNS record set resource.
     */
    existingDnsRecordSet?: DnsRecordSet;
    /**
     * Represents a DNS record set resource.
     */
    newDnsRecordSet?: DnsRecordSet;
    /**
     * Required. The name of the private DNS zone in the shared producer host project from which the record set will be removed.
     */
    zone?: string;
}

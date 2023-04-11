import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a DNS record set resource.
 */
export declare class DnsRecordSet extends SpeakeasyBase {
    /**
     * Required. As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1) for examples see https://cloud.google.com/dns/records/json-record.
     */
    data?: string[];
    /**
     * Required. The DNS or domain name of the record set, e.g. `test.example.com`. Cloud DNS requires that a DNS suffix ends with a trailing dot.
     */
    domain?: string;
    /**
     * Required. The period of time for which this RecordSet can be cached by resolvers.
     */
    ttl?: string;
    /**
     * Required. The identifier of a supported record type.
     */
    type?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { RRSetRoutingPolicy } from "./rrsetroutingpolicy";
/**
 * A unit of data that is returned by the DNS servers.
 */
export declare class ResourceRecordSet extends SpeakeasyBase {
    kind?: string;
    /**
     * For example, www.example.com.
     */
    name?: string;
    /**
     * A RRSetRoutingPolicy represents ResourceRecordSet data that is returned dynamically with the response varying based on configured properties such as geolocation or by weighted random selection.
     */
    routingPolicy?: RRSetRoutingPolicy;
    /**
     * As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1) -- see examples.
     */
    rrdatas?: string[];
    /**
     * As defined in RFC 4034 (section 3.2).
     */
    signatureRrdatas?: string[];
    /**
     * Number of seconds that this ResourceRecordSet can be cached by resolvers.
     */
    ttl?: number;
    /**
     * The identifier of a supported record type. See the list of Supported DNS record types.
     */
    type?: string;
}

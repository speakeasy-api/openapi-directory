import { SpeakeasyBase } from "../../../internal/utils";
import { DnsKey } from "./dnskey";
import { ResponseHeader } from "./responseheader";
/**
 * The response to a request to enumerate DnsKeys in a ManagedZone.
 */
export declare class DnsKeysListResponse extends SpeakeasyBase {
    /**
     * The requested resources.
     */
    dnsKeys?: DnsKey[];
    /**
     * Elements common to every response.
     */
    header?: ResponseHeader;
    /**
     * Type of resource.
     */
    kind?: string;
    /**
     * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. There is no way to retrieve a "snapshot" of collections larger than the maximum page size.
     */
    nextPageToken?: string;
}

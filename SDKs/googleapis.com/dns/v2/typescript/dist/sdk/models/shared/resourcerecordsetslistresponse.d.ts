import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceRecordSet } from "./resourcerecordset";
import { ResponseHeader } from "./responseheader";
/**
 * Successful response
 */
export declare class ResourceRecordSetsListResponse extends SpeakeasyBase {
    /**
     * Elements common to every response.
     */
    header?: ResponseHeader;
    /**
     * Type of resource.
     */
    kind?: string;
    /**
     * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. This lets you retrieve complete contents of even larger collections, one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size.
     */
    nextPageToken?: string;
    /**
     * The resource record set resources.
     */
    rrsets?: ResourceRecordSet[];
}

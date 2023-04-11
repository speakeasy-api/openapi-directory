import { SpeakeasyBase } from "../../../internal/utils";
import { Change } from "./change";
import { ResponseHeader } from "./responseheader";
/**
 * The response to a request to enumerate Changes to a ResourceRecordSets collection.
 */
export declare class ChangesListResponse extends SpeakeasyBase {
    /**
     * The requested changes.
     */
    changes?: Change[];
    /**
     * Elements common to every response.
     */
    header?: ResponseHeader;
    /**
     * Type of resource.
     */
    kind?: string;
    /**
     * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. This lets you retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a "snapshot" of collections larger than the maximum page size.
     */
    nextPageToken?: string;
}

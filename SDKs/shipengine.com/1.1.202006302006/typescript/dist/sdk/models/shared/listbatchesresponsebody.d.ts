import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { OptionalLink } from "./optionallink";
import { Batch } from "./batch";
/**
 * Helpful links to other pages of results
**/
export declare class ListBatchesResponseBodyPaginationLink extends SpeakeasyBase {
    first: Link;
    last: Link;
    next: OptionalLink;
    prev: OptionalLink;
}
/**
 * A list batch response body
**/
export declare class ListBatchesResponseBody extends SpeakeasyBase {
    batches: Batch[];
    links: ListBatchesResponseBodyPaginationLink;
    page: number;
    pages: number;
    total: number;
}

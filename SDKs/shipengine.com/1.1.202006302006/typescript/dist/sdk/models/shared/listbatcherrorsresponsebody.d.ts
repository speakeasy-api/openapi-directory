import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { OptionalLink } from "./optionallink";
import { BatchResponseError } from "./batchresponseerror";
/**
 * Helpful links to other pages of results
**/
export declare class ListBatchErrorsResponseBodyPaginationLink extends SpeakeasyBase {
    first: Link;
    last: Link;
    next: OptionalLink;
    prev: OptionalLink;
}
/**
 * A batch errors response body
**/
export declare class ListBatchErrorsResponseBody extends SpeakeasyBase {
    errors: BatchResponseError[];
    links: ListBatchErrorsResponseBodyPaginationLink;
}

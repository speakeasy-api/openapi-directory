import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { OptionalLink } from "./optionallink";
import { BatchResponseError } from "./batchresponseerror";



// ListBatchErrorsResponseBodyPaginationLink
/** 
 * Helpful links to other pages of results
**/
export class ListBatchErrorsResponseBodyPaginationLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first: Link;

  @SpeakeasyMetadata({ data: "json, name=last" })
  last: Link;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next: OptionalLink;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev: OptionalLink;
}


// ListBatchErrorsResponseBody
/** 
 * A batch errors response body
**/
export class ListBatchErrorsResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: BatchResponseError })
  errors: BatchResponseError[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ListBatchErrorsResponseBodyPaginationLink;
}

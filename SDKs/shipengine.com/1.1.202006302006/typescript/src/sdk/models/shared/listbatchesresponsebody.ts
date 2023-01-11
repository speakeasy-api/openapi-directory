import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { OptionalLink } from "./optionallink";
import { Batch } from "./batch";



// ListBatchesResponseBodyPaginationLink
/** 
 * Helpful links to other pages of results
**/
export class ListBatchesResponseBodyPaginationLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first: Link;

  @SpeakeasyMetadata({ data: "json, name=last" })
  last: Link;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next: OptionalLink;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev: OptionalLink;
}


// ListBatchesResponseBody
/** 
 * A list batch response body
**/
export class ListBatchesResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batches", elemType: Batch })
  batches: Batch[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ListBatchesResponseBodyPaginationLink;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}

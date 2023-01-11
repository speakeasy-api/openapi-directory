import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { OptionalLink } from "./optionallink";



// ListManifestsResponseBodyPaginationLink
/** 
 * Helpful links to other pages of results
**/
export class ListManifestsResponseBodyPaginationLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first: Link;

  @SpeakeasyMetadata({ data: "json, name=last" })
  last: Link;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next: OptionalLink;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev: OptionalLink;
}


// ListManifestsResponseBodyManifestManifestDownload
/** 
 * Object containing the href link to download the manifest file
**/
export class ListManifestsResponseBodyManifestManifestDownload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


// ListManifestsResponseBodyManifest
/** 
 * Used for combining packages into one scannable form that a carrier can use when picking up a large
 * number of shipments
 * 
**/
export class ListManifestsResponseBodyManifest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier_id" })
  carrierId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=form_id" })
  formId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=manifest_download" })
  manifestDownload?: ListManifestsResponseBodyManifestManifestDownload;

  @SpeakeasyMetadata({ data: "json, name=manifest_id" })
  manifestId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ship_date" })
  shipDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=shipments" })
  shipments?: number;

  @SpeakeasyMetadata({ data: "json, name=submission_id" })
  submissionId?: string;

  @SpeakeasyMetadata({ data: "json, name=warehouse_id" })
  warehouseId?: Record<string, any>;
}


// ListManifestsResponseBody
/** 
 * A list manifests response body
**/
export class ListManifestsResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ListManifestsResponseBodyPaginationLink;

  @SpeakeasyMetadata({ data: "json, name=manifests", elemType: ListManifestsResponseBodyManifest })
  manifests: ListManifestsResponseBodyManifest[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}

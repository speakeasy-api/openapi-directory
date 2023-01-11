import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionalLink } from "./optionallink";



// GetBatchByIdResponseBodyOptionalLink
/** 
 * A link to a related resource, or an empty object if there is no resource to link to
**/
export class GetBatchByIdResponseBodyOptionalLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// GetBatchByIdResponseBodyLabelDownload
/** 
 * Reference to the various downloadable file formats for the generated label
 * 
**/
export class GetBatchByIdResponseBodyLabelDownload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=pdf" })
  pdf?: string;

  @SpeakeasyMetadata({ data: "json, name=png" })
  png?: string;

  @SpeakeasyMetadata({ data: "json, name=zpl" })
  zpl?: string;
}


// GetBatchByIdResponseBody
/** 
 * Batches are an advanced feature of ShipEngine designed for users who need to generate hundreds or
 * thousands of labels at a time.
 * 
**/
export class GetBatchByIdResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batch_errors_url" })
  batchErrorsUrl: GetBatchByIdResponseBodyOptionalLink;

  @SpeakeasyMetadata({ data: "json, name=batch_id" })
  batchId: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=batch_labels_url" })
  batchLabelsUrl: OptionalLink;

  @SpeakeasyMetadata({ data: "json, name=batch_notes" })
  batchNotes: string;

  @SpeakeasyMetadata({ data: "json, name=batch_shipments_url" })
  batchShipmentsUrl: OptionalLink;

  @SpeakeasyMetadata({ data: "json, name=completed" })
  completed: number;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors: number;

  @SpeakeasyMetadata({ data: "json, name=external_batch_id" })
  externalBatchId: string;

  @SpeakeasyMetadata({ data: "json, name=form_download" })
  formDownload: GetBatchByIdResponseBodyOptionalLink;

  @SpeakeasyMetadata({ data: "json, name=forms" })
  forms: number;

  @SpeakeasyMetadata({ data: "json, name=label_download" })
  labelDownload: GetBatchByIdResponseBodyLabelDownload;

  @SpeakeasyMetadata({ data: "json, name=label_format" })
  labelFormat: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=label_layout" })
  labelLayout: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=processed_at" })
  processedAt: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=warnings" })
  warnings: number;
}

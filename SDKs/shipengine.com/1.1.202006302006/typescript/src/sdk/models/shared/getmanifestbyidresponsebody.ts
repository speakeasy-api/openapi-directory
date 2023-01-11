import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetManifestByIdResponseBodyManifestDownload
/** 
 * Object containing the href link to download the manifest file
**/
export class GetManifestByIdResponseBodyManifestDownload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


// GetManifestByIdResponseBody
/** 
 * Used for combining packages into one scannable form that a carrier can use when picking up a large
 * number of shipments
 * 
**/
export class GetManifestByIdResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier_id" })
  carrierId: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=form_id" })
  formId: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=manifest_download" })
  manifestDownload: GetManifestByIdResponseBodyManifestDownload;

  @SpeakeasyMetadata({ data: "json, name=manifest_id" })
  manifestId: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ship_date" })
  shipDate: Date;

  @SpeakeasyMetadata({ data: "json, name=shipments" })
  shipments: number;

  @SpeakeasyMetadata({ data: "json, name=submission_id" })
  submissionId: string;

  @SpeakeasyMetadata({ data: "json, name=warehouse_id" })
  warehouseId: Record<string, any>;
}

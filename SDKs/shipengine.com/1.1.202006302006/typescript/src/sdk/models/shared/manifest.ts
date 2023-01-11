import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ManifestManifestDownload
/** 
 * Object containing the href link to download the manifest file
**/
export class ManifestManifestDownload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


// Manifest
/** 
 * Used for combining packages into one scannable form that a carrier can use when picking up a large
 * number of shipments
 * 
**/
export class Manifest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier_id" })
  carrierId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=form_id" })
  formId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=manifest_download" })
  manifestDownload?: ManifestManifestDownload;

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

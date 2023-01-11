import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Manifest } from "./manifest";



// CreateManifestResponseBodyManifestDownload
/** 
 * Object containing the href link to download the manifest file
**/
export class CreateManifestResponseBodyManifestDownload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


// CreateManifestResponseBody
/** 
 * Deprecated manifest resource
**/
export class CreateManifestResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier_id" })
  carrierId: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=form_id" })
  formId: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=manifest_download" })
  manifestDownload: CreateManifestResponseBodyManifestDownload;

  @SpeakeasyMetadata({ data: "json, name=manifest_id" })
  manifestId: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=manifests", elemType: Manifest })
  manifests?: Manifest[];

  @SpeakeasyMetadata({ data: "json, name=ship_date" })
  shipDate: Date;

  @SpeakeasyMetadata({ data: "json, name=shipments" })
  shipments: number;

  @SpeakeasyMetadata({ data: "json, name=submission_id" })
  submissionId: string;

  @SpeakeasyMetadata({ data: "json, name=warehouse_id" })
  warehouseId: Record<string, any>;
}

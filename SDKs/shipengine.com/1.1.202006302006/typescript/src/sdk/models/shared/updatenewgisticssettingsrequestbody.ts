import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateNewgisticsSettingsRequestBody
/** 
 * A newgistics account settings request body
**/
export class UpdateNewgisticsSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=include_barcode_with_order_number" })
  includeBarcodeWithOrderNumber?: boolean;

  @SpeakeasyMetadata({ data: "json, name=receive_email_on_manifest_processing" })
  receiveEmailOnManifestProcessing?: boolean;
}

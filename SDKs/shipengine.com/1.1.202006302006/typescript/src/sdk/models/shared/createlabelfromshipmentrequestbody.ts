import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LabelDownloadTypeEnum } from "./labeldownloadtypeenum";
import { ValidateAddressEnum } from "./validateaddressenum";



// CreateLabelFromShipmentRequestBody
/** 
 * A purchase label without shipment request body
**/
export class CreateLabelFromShipmentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label_download_type" })
  labelDownloadType?: LabelDownloadTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=label_format" })
  labelFormat?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=label_layout" })
  labelLayout?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=validate_address" })
  validateAddress?: ValidateAddressEnum;
}

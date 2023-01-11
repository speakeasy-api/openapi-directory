import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LabelChargeEventEnum } from "./labelchargeeventenum";



// CreateReturnLabelRequestBody
/** 
 * A create return label request body
**/
export class CreateReturnLabelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=charge_event" })
  chargeEvent?: LabelChargeEventEnum;

  @SpeakeasyMetadata({ data: "json, name=label_download_type" })
  labelDownloadType?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=label_format" })
  labelFormat?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=label_image_id" })
  labelImageId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=label_layout" })
  labelLayout?: Record<string, any>;
}

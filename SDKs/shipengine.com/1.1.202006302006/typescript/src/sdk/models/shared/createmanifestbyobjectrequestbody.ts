import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateManifestByObjectRequestBody
/** 
 * A create manifest request body
**/
export class CreateManifestByObjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier_id" })
  carrierId: string;

  @SpeakeasyMetadata({ data: "json, name=excluded_label_ids" })
  excludedLabelIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=label_ids" })
  labelIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=ship_date" })
  shipDate: Date;

  @SpeakeasyMetadata({ data: "json, name=warehouse_id" })
  warehouseId: string;
}

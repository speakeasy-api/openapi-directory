import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderSourceNameEnum } from "./ordersourcenameenum";



// ShipmentItem
/** 
 * A shipment item
**/
export class ShipmentItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asin" })
  asin?: string;

  @SpeakeasyMetadata({ data: "json, name=external_order_id" })
  externalOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=external_order_item_id" })
  externalOrderItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=order_source_code" })
  orderSourceCode?: OrderSourceNameEnum;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=sales_order_id" })
  salesOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=sales_order_item_id" })
  salesOrderItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;
}

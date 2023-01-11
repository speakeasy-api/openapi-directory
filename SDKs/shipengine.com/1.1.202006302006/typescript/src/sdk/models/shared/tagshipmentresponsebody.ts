import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagShipmentResponseBodyTag
/** 
 * Tags are arbitrary strings that you can use to categorize shipments. For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.
 * 
**/
export class TagShipmentResponseBodyTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


// TagShipmentResponseBody
/** 
 * A shipment add tag response body
**/
export class TagShipmentResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=shipment_id" })
  shipmentId: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag: TagShipmentResponseBodyTag;
}

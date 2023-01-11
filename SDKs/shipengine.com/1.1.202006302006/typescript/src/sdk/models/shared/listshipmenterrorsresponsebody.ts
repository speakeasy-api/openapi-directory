import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { OptionalLink } from "./optionallink";
import { ShipmentResponseError } from "./shipmentresponseerror";



// ListShipmentErrorsResponseBodyPaginationLink
/** 
 * Helpful links to other pages of results
**/
export class ListShipmentErrorsResponseBodyPaginationLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first: Link;

  @SpeakeasyMetadata({ data: "json, name=last" })
  last: Link;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next: OptionalLink;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev: OptionalLink;
}


// ListShipmentErrorsResponseBody
/** 
 * A shipment errors response body
**/
export class ListShipmentErrorsResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ShipmentResponseError })
  errors: ShipmentResponseError[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ListShipmentErrorsResponseBodyPaginationLink;
}

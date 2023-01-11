import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { OptionalLink } from "./optionallink";
import { ShipmentResponseError } from "./shipmentresponseerror";
/**
 * Helpful links to other pages of results
**/
export declare class ListShipmentErrorsResponseBodyPaginationLink extends SpeakeasyBase {
    first: Link;
    last: Link;
    next: OptionalLink;
    prev: OptionalLink;
}
/**
 * A shipment errors response body
**/
export declare class ListShipmentErrorsResponseBody extends SpeakeasyBase {
    errors: ShipmentResponseError[];
    links: ListShipmentErrorsResponseBodyPaginationLink;
}

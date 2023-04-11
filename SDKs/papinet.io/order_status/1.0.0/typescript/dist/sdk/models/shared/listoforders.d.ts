import { SpeakeasyBase } from "../../../internal/utils";
import { OrderHeader } from "./orderheader";
import { PaginationLinks } from "./paginationlinks";
/**
 * OK
 */
export declare class ListOfOrders extends SpeakeasyBase {
    links?: PaginationLinks;
    orders?: OrderHeader[];
}

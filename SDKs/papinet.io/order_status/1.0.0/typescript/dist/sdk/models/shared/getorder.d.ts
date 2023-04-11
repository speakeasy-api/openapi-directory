import { SpeakeasyBase } from "../../../internal/utils";
import { OrderLineItem } from "./orderlineitem";
import { PaginationLinks } from "./paginationlinks";
export declare enum GetOrderOrderStatusEnum {
    Active = "Active",
    Cancelled = "Cancelled",
    Completed = "Completed"
}
/**
 * OK
 */
export declare class GetOrder extends SpeakeasyBase {
    id: string;
    links?: PaginationLinks;
    numberOfLineItems: number;
    orderLineItems?: OrderLineItem[];
    orderNumber: string;
    orderStatus: GetOrderOrderStatusEnum;
}

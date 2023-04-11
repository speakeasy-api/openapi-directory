import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class OrderLineItemProductFee extends SpeakeasyBase {
    amount?: Price;
    /**
     * Name of the fee.
     */
    name?: string;
}

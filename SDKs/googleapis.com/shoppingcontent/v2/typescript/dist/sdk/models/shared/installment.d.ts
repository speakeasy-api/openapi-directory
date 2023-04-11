import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class Installment extends SpeakeasyBase {
    amount?: Price;
    /**
     * The number of installments the buyer has to pay.
     */
    months?: string;
}

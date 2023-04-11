import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentRead } from "./paymentread";
/**
 * List payments
 */
export declare class PaginatedPaymentReadList extends SpeakeasyBase {
    count?: number;
    next?: string;
    previous?: string;
    results?: PaymentRead[];
}

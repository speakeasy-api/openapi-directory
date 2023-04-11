import { SpeakeasyBase } from "../../../internal/utils";
import { GetPayoutsResponseV3Links } from "./getpayoutsresponsev3links";
import { ListPaymentsResponseV3Page } from "./listpaymentsresponsev3page";
import { PaymentResponseV3 } from "./paymentresponsev3";
/**
 * List Payments Response Object
 */
export declare class ListPaymentsResponseV3 extends SpeakeasyBase {
    content?: PaymentResponseV3[];
    links?: GetPayoutsResponseV3Links[];
    page?: ListPaymentsResponseV3Page;
}

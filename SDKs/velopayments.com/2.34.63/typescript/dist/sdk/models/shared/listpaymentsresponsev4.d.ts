import { SpeakeasyBase } from "../../../internal/utils";
import { GetPayoutsResponseV3Links } from "./getpayoutsresponsev3links";
import { ListPaymentsResponseV3Page } from "./listpaymentsresponsev3page";
import { PaymentResponseV4 } from "./paymentresponsev4";
/**
 * List Payments Response Object
 */
export declare class ListPaymentsResponseV4 extends SpeakeasyBase {
    content?: PaymentResponseV4[];
    links?: GetPayoutsResponseV3Links[];
    page?: ListPaymentsResponseV3Page;
}

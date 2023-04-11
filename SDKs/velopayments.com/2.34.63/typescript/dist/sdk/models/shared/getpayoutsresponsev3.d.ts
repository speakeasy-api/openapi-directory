import { SpeakeasyBase } from "../../../internal/utils";
import { GetPayoutsResponseV3Links } from "./getpayoutsresponsev3links";
import { GetPayoutsResponseV3Page } from "./getpayoutsresponsev3page";
import { PayoutSummaryAuditV3 } from "./payoutsummaryauditv3";
/**
 * List Payouts Response
 */
export declare class GetPayoutsResponseV3 extends SpeakeasyBase {
    content?: PayoutSummaryAuditV3[];
    links?: GetPayoutsResponseV3Links[];
    page?: GetPayoutsResponseV3Page;
}

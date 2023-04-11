import { SpeakeasyBase } from "../../../internal/utils";
import { FundingPayorStatusAuditResponse } from "./fundingpayorstatusauditresponse";
import { LinkForResponse } from "./linkforresponse";
import { PageForResponse } from "./pageforresponse";
/**
 * Funding Account Deltas
 */
export declare class PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse extends SpeakeasyBase {
    content?: FundingPayorStatusAuditResponse[];
    links?: LinkForResponse[];
    page?: PageForResponse;
}

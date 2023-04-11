import { SpeakeasyBase } from "../../../internal/utils";
import { FundingAudit } from "./fundingaudit";
import { GetFundingsResponseLinks } from "./getfundingsresponselinks";
import { PagedUserResponsePage } from "./pageduserresponsepage";
/**
 * List Users Response Object
 */
export declare class GetFundingsResponse extends SpeakeasyBase {
    content?: FundingAudit[];
    links?: GetFundingsResponseLinks[];
    page?: PagedUserResponsePage;
}

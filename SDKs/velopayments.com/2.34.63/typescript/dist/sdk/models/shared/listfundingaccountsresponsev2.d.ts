import { SpeakeasyBase } from "../../../internal/utils";
import { FundingAccountResponseV2 } from "./fundingaccountresponsev2";
import { ListFundingAccountsResponseV2Links } from "./listfundingaccountsresponsev2links";
import { ListFundingAccountsResponseV2Page } from "./listfundingaccountsresponsev2page";
/**
 * List Funding Accounts Response Object
 */
export declare class ListFundingAccountsResponseV2 extends SpeakeasyBase {
    content?: FundingAccountResponseV2[];
    links?: ListFundingAccountsResponseV2Links[];
    page?: ListFundingAccountsResponseV2Page;
}

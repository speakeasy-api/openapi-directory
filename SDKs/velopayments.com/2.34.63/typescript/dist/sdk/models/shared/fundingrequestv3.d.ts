import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Body to included amount to be funded
 */
export declare class FundingRequestV3 extends SpeakeasyBase {
    /**
     * Amount to fund in minor units
     */
    amount: number;
    /**
     * The funding account id
     */
    fundingAccountId: string;
}

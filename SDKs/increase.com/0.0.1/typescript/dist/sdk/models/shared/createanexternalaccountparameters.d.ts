import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the destination account. Defaults to `checking`.
 */
export declare enum CreateAnExternalAccountParametersFundingEnum {
    Checking = "checking",
    Savings = "savings",
    Other = "other"
}
export declare class CreateAnExternalAccountParameters extends SpeakeasyBase {
    /**
     * The account number for the destination account.
     */
    accountNumber: string;
    /**
     * The name you choose for the Account.
     */
    description: string;
    /**
     * The type of the destination account. Defaults to `checking`.
     */
    funding?: CreateAnExternalAccountParametersFundingEnum;
    /**
     * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the destination account.
     */
    routingNumber: string;
}

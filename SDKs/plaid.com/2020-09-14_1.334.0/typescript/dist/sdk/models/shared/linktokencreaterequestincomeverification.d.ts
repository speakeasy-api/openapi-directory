import { SpeakeasyBase } from "../../../internal/utils";
import { IncomeVerificationSourceTypeEnum } from "./incomeverificationsourcetypeenum";
import { LinkTokenCreateRequestIncomeVerificationBankIncome } from "./linktokencreaterequestincomeverificationbankincome";
import { LinkTokenCreateRequestIncomeVerificationPayrollIncome } from "./linktokencreaterequestincomeverificationpayrollincome";
import { LinkTokenCreateRequestUserStatedIncomeSource } from "./linktokencreaterequestuserstatedincomesource";
/**
 * Specifies options for initializing Link for use with the Income product. This field is required if `income_verification` is included in the `products` array.
 */
export declare class LinkTokenCreateRequestIncomeVerification extends SpeakeasyBase {
    /**
     * An array of access tokens corresponding to Items that a user has previously connected with. Data from these institutions will be cross-referenced with document data received during the Document Income flow to help verify that the uploaded documents are accurate. If the `transactions` product was not initialized for these Items during link, it will be initialized after this Link session.
     *
     * @remarks
     *
     * This field should only be used with the `payroll` income source type.
     */
    accessTokens?: string[];
    /**
     * The `asset_report_id` of an asset report associated with the user, as provided by `/asset_report/create`. Providing an `asset_report_id` is optional and can be used to verify the user through a streamlined flow. If provided, the bank linking flow will be skipped.
     */
    assetReportId?: string;
    /**
     * Specifies options for initializing Link for use with Bank Income. This field is required if `income_verification` is included in the `products` array and `bank` is specified in `income_source_types`.
     */
    bankIncome?: LinkTokenCreateRequestIncomeVerificationBankIncome;
    /**
     * The types of source income data that users will be permitted to share. Options include `bank` and `payroll`. Currently you can only specify one of these options.
     */
    incomeSourceTypes?: IncomeVerificationSourceTypeEnum[];
    /**
     * The `income_verification_id` of the verification instance, as provided by `/income/verification/create`.
     */
    incomeVerificationId?: string;
    /**
     * Specifies options for initializing Link for use with Payroll Income.
     */
    payrollIncome?: LinkTokenCreateRequestIncomeVerificationPayrollIncome;
    /**
     * The ID of a precheck created with `/income/verification/precheck`. Will be used to improve conversion of the income verification flow by streamlining the Link interface presented to the end user.
     */
    precheckId?: string;
    /**
     * A list of user stated income sources
     */
    statedIncomeSources?: LinkTokenCreateRequestUserStatedIncomeSource[];
}

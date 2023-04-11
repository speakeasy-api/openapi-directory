import { SpeakeasyBase } from "../../../internal/utils";
import { IncomeVerificationSourceTypeEnum } from "./incomeverificationsourcetypeenum";
import { SandboxPublicTokenCreateRequestIncomeVerificationBankIncome } from "./sandboxpublictokencreaterequestincomeverificationbankincome";
/**
 * A set of parameters for income verification options. This field is required if `income_verification` is included in the `initial_products` array.
 */
export declare class SandboxPublicTokenCreateRequestOptionsIncomeVerification extends SpeakeasyBase {
    /**
     * Specifies options for Bank Income. This field is required if `income_verification` is included in the `initial_products` array and `bank` is specified in `income_source_types`.
     */
    bankIncome?: SandboxPublicTokenCreateRequestIncomeVerificationBankIncome;
    /**
     * The types of source income data that users will be permitted to share. Options include `bank` and `payroll`. Currently you can only specify one of these options.
     */
    incomeSourceTypes?: IncomeVerificationSourceTypeEnum[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { SandboxPublicTokenCreateRequestOptionsIncomeVerification } from "./sandboxpublictokencreaterequestoptionsincomeverification";
import { SandboxPublicTokenCreateRequestOptionsTransactions } from "./sandboxpublictokencreaterequestoptionstransactions";
/**
 * An optional set of options to be used when configuring the Item. If specified, must not be `null`.
 */
export declare class SandboxPublicTokenCreateRequestOptions extends SpeakeasyBase {
    /**
     * A set of parameters for income verification options. This field is required if `income_verification` is included in the `initial_products` array.
     */
    incomeVerification?: SandboxPublicTokenCreateRequestOptionsIncomeVerification;
    /**
     * Test password to use for the creation of the Sandbox Item. Default value is `pass_good`.
     */
    overridePassword?: string;
    /**
     * Test username to use for the creation of the Sandbox Item. Default value is `user_good`.
     */
    overrideUsername?: string;
    /**
     * An optional set of parameters corresponding to transactions options.
     */
    transactions?: SandboxPublicTokenCreateRequestOptionsTransactions;
    /**
     * Specify a webhook to associate with the new Item.
     */
    webhook?: string;
}

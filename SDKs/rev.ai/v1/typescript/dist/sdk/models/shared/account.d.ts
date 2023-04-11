import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Rev.ai Account Model
 */
export declare class Account extends SpeakeasyBase {
    /**
     * Amount of Rev.ai API credits remaining in seconds
     */
    balanceSeconds?: number;
    /**
     * Email of developer account
     */
    email?: string;
}

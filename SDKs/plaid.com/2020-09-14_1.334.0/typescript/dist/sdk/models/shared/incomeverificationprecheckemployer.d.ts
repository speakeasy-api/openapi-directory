import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the end user's employer
 */
export declare class IncomeVerificationPrecheckEmployer extends SpeakeasyBase {
    /**
     * The address of the employer
     */
    address?: Record<string, any>;
    /**
     * The employer's name
     */
    name?: string;
    /**
     * The employer's tax id
     */
    taxId?: string;
    /**
     * The URL for the employer's public website
     */
    url?: string;
}

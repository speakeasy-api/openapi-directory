import { SpeakeasyBase } from "../../../internal/utils";
import { AllowanceAllowanceTransaction } from "./allowanceallowancetransaction";
/**
 * Allowance
 */
export declare class Allowance extends SpeakeasyBase {
    allowanceTransaction?: AllowanceAllowanceTransaction[];
    balance?: number;
    id?: number;
    lastUpdated?: string;
    success?: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { EarningWithTQS } from "./earningwithtqs";
/**
 * Earnings for vendors
 */
export declare class Earnings extends SpeakeasyBase {
    completed?: EarningWithTQS[];
    ongoing?: EarningWithTQS[];
    total?: number;
}

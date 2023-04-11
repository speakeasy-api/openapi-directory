import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegressionApiBody extends SpeakeasyBase {
    /**
     * convert dates to either month (1-12) or week (1-52)
     */
    convertDateTo?: string;
    data: Record<string, any>[];
    ignoreVariables?: Record<string, any>[];
    /**
     * api key
     */
    key: string;
    /**
     * name of the desired outcome variable
     */
    outcomeVariable: string;
}

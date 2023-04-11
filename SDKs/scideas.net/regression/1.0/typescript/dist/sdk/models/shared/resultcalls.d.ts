import { SpeakeasyBase } from "../../../internal/utils";
export declare class ResultCalls extends SpeakeasyBase {
    /**
     * number of api calls allowed per month
     */
    limit?: number;
    /**
     * true if monthly limit has been reached
     */
    limitReached?: boolean;
    /**
     * number of api calls this month
     */
    thisMonth?: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostStatsIncrementFieldRequest extends SpeakeasyBase {
    /**
     * The id of the app associated with this statistic value
     */
    appId: string;
    /**
     * The date (in millis) for when this increment occurred. The default is the current date if no value is provided.
     */
    date?: number;
    /**
     * The field to be incremented
     */
    field: string;
    /**
     * The id of the user that is performing the action
     */
    userId?: string;
    /**
     * The increment amount. Default is 1 if no value is provided.
     */
    value?: number;
}
export declare class PostStatsIncrementFieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

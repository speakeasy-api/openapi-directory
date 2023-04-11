import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTargetsAllRiskTrend200ApplicationJSON extends SpeakeasyBase {
    /**
     * Date time
     */
    zero?: Date;
    /**
     * Risk score
     */
    one?: number;
}
export declare class GetTargetsAllRiskTrendResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Risk trend plot data
     */
    getTargetsAllRiskTrend200ApplicationJSONObjects?: GetTargetsAllRiskTrend200ApplicationJSON[];
}

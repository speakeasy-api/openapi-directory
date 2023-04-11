import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdRiskTrendRequest extends SpeakeasyBase {
    /**
     * Target id
     */
    targetId: string;
}
export declare class GetTargetsTargetIdRiskTrend200ApplicationJSON extends SpeakeasyBase {
    /**
     * Date time
     */
    zero?: Date;
    /**
     * Risk score
     */
    one?: number;
}
export declare class GetTargetsTargetIdRiskTrendResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Risk trend plot data
     */
    getTargetsTargetIdRiskTrend200ApplicationJSONObjects?: GetTargetsTargetIdRiskTrend200ApplicationJSON[];
}

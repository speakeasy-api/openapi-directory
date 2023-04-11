import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CollectAnalyticsRequest extends SpeakeasyBase {
    analyticsCollection?: shared.AnalyticsCollection;
    /**
     * Continuous project ID
     */
    id: number;
}
export declare class CollectAnalyticsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Analytics data collection result
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

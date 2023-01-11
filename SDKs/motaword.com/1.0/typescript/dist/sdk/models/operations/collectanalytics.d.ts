import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CollectAnalyticsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class CollectAnalyticsRequest extends SpeakeasyBase {
    pathParams: CollectAnalyticsPathParams;
    request?: shared.AnalyticsCollection;
}
export declare class CollectAnalyticsResponse extends SpeakeasyBase {
    contentType: string;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}

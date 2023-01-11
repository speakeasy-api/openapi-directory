import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsAllScheduledscansExpandedQueryParams extends SpeakeasyBase {
    length?: number;
}
export declare class GetTargetsAllScheduledscansExpanded200ApplicationJson extends SpeakeasyBase {
    results?: shared.Scheduled[];
}
export declare class GetTargetsAllScheduledscansExpanded404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsAllScheduledscansExpandedRequest extends SpeakeasyBase {
    queryParams: GetTargetsAllScheduledscansExpandedQueryParams;
}
export declare class GetTargetsAllScheduledscansExpandedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsAllScheduledscansExpanded200ApplicationJSONObject?: GetTargetsAllScheduledscansExpanded200ApplicationJson;
    getTargetsAllScheduledscansExpanded404ApplicationJSONObject?: GetTargetsAllScheduledscansExpanded404ApplicationJson;
}

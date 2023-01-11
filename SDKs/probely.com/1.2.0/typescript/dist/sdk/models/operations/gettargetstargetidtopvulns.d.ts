import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTargetsTargetIdTopVulnsPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class GetTargetsTargetIdTopVulns200ApplicationJson extends SpeakeasyBase {
    zero?: string;
    one?: string;
}
export declare class GetTargetsTargetIdTopVulnsRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdTopVulnsPathParams;
}
export declare class GetTargetsTargetIdTopVulnsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsTargetIdTopVulns200ApplicationJSONObjects?: GetTargetsTargetIdTopVulns200ApplicationJson[];
}

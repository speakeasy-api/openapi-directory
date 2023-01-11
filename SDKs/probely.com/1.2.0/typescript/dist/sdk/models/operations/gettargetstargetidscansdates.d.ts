import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTargetsTargetIdScansDatesPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class GetTargetsTargetIdScansDates401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansDates404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansDatesRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdScansDatesPathParams;
}
export declare class GetTargetsTargetIdScansDatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsTargetIdScansDates200ApplicationJSONDateStrings?: Date[];
    getTargetsTargetIdScansDates401ApplicationJSONObject?: GetTargetsTargetIdScansDates401ApplicationJson;
    getTargetsTargetIdScansDates404ApplicationJSONObject?: GetTargetsTargetIdScansDates404ApplicationJson;
}

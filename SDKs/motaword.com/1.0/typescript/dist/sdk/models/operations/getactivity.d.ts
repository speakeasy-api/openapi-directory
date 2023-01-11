import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetActivityPathParams extends SpeakeasyBase {
    activityId: number;
    projectId: number;
}
export declare class GetActivityRequest extends SpeakeasyBase {
    pathParams: GetActivityPathParams;
}
export declare class GetActivityResponse extends SpeakeasyBase {
    activity?: shared.Activity;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}

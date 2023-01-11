import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTrackingLogFromLabelPathParams extends SpeakeasyBase {
    labelId: string;
}
export declare class GetTrackingLogFromLabelRequest extends SpeakeasyBase {
    pathParams: GetTrackingLogFromLabelPathParams;
}
export declare class GetTrackingLogFromLabelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    getTrackingLogFromLabelResponseBody?: shared.GetTrackingLogFromLabelResponseBody;
}

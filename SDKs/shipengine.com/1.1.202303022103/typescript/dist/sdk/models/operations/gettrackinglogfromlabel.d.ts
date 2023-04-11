import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTrackingLogFromLabelRequest extends SpeakeasyBase {
    /**
     * Label ID
     */
    labelId: string;
}
export declare class GetTrackingLogFromLabelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
    /**
     * The request was a success.
     */
    getTrackingLogFromLabelResponseBody?: shared.GetTrackingLogFromLabelResponseBody;
}

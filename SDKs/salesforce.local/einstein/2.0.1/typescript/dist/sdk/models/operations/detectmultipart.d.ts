import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DetectMultipartSecurity extends SpeakeasyBase {
    bearerToken: string;
}
export declare class DetectMultipartResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Detection Result
     */
    objectDetectionResponse?: shared.ObjectDetectionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

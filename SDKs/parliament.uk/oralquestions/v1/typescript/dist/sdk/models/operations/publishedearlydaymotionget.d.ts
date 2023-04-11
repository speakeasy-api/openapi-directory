import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PublishedEarlyDayMotionGetRequest extends SpeakeasyBase {
    /**
     * Early Day Motion with the ID specified.
     */
    id: number;
}
export declare class PublishedEarlyDayMotionGetResponse extends SpeakeasyBase {
    /**
     * OK
     */
    apiResponseListPublishedWrittenQuestion?: shared.ApiResponseListPublishedWrittenQuestion;
    /**
     * BadRequest
     */
    apiResponseObject?: shared.ApiResponseObject;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

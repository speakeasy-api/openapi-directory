import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSearchRequest extends SpeakeasyBase {
    createSearchRequest: shared.CreateSearchRequest;
    /**
     * The ID of the engine to use for this request.  You can select one of `ada`, `babbage`, `curie`, or `davinci`.
     */
    engineId: string;
}
export declare class CreateSearchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    createSearchResponse?: shared.CreateSearchResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

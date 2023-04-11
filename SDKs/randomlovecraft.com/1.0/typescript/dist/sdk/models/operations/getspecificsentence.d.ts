import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpecificSentenceRequest extends SpeakeasyBase {
    /**
     * Sentence ID
     */
    id: string;
}
export declare class GetSpecificSentence200ApplicationJSON extends SpeakeasyBase {
    data?: shared.Sentence;
}
export declare class GetSpecificSentenceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getSpecificSentence200ApplicationJSONObject?: GetSpecificSentence200ApplicationJSON;
}

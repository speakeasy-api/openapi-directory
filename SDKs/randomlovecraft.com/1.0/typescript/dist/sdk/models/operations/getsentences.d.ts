import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSentencesRequest extends SpeakeasyBase {
    limit?: number;
}
export declare class GetSentences200ApplicationJSON extends SpeakeasyBase {
    data?: shared.Sentence[];
}
export declare class GetSentencesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getSentences200ApplicationJSONObject?: GetSentences200ApplicationJSON;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSentencesFromBookRequest extends SpeakeasyBase {
    /**
     * Book ID
     */
    id: string;
    limit?: number;
}
export declare class GetSentencesFromBook200ApplicationJSON extends SpeakeasyBase {
    data?: shared.Sentence[];
}
export declare class GetSentencesFromBookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getSentencesFromBook200ApplicationJSONObject?: GetSentencesFromBook200ApplicationJSON;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PredictRawSecurity extends SpeakeasyBase {
    httpBearer: string;
}
export declare class PredictRawRequest extends SpeakeasyBase {
    requestBody: Uint8Array;
    deployment: string;
    namespace: string;
}
export declare class PredictRawResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A successful response.
     */
    seldonMessage?: shared.SeldonMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

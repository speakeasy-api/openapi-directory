import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PredictJsonSecurity extends SpeakeasyBase {
    httpBearer: string;
}
export declare class PredictJsonRequest extends SpeakeasyBase {
    seldonMessage: shared.SeldonMessage;
    deployment: string;
    namespace: string;
}
export declare class PredictJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A successful response.
     */
    seldonMessage?: shared.SeldonMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

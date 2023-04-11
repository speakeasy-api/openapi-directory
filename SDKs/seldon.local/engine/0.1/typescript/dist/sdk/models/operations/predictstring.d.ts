import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PredictStringSecurity extends SpeakeasyBase {
    httpBearer: string;
}
export declare class PredictStringRequest extends SpeakeasyBase {
    requestBody: string;
    deployment: string;
    namespace: string;
}
export declare class PredictStringResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A successful response.
     */
    seldonMessage?: shared.SeldonMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

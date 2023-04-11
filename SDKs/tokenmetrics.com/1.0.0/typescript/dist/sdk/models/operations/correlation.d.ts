import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CorrelationRequest extends SpeakeasyBase {
    limit?: string;
    tokens?: string;
}
export declare class CorrelationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

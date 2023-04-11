import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PricePredictionRequest extends SpeakeasyBase {
    date?: string;
    limit?: string;
    tokens?: string;
}
export declare class PricePredictionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

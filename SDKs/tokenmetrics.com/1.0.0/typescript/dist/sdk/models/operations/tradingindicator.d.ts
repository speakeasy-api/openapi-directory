import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TradingIndicatorRequest extends SpeakeasyBase {
    limit?: string;
    tokens?: string;
}
export declare class TradingIndicatorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

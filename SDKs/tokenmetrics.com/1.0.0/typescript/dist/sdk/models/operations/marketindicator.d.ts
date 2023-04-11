import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MarketIndicatorRequest extends SpeakeasyBase {
    endDate?: string;
    limit?: string;
    startDate?: string;
}
export declare class MarketIndicatorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

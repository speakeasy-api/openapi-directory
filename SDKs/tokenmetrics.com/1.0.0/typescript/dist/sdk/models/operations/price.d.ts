import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PriceRequest extends SpeakeasyBase {
    endDate?: string;
    limit?: string;
    page?: string;
    startDate?: string;
    tokens?: string;
}
export declare class PriceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

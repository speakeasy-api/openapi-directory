import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SentimentsRequest extends SpeakeasyBase {
    endDate?: string;
    limit?: string;
    startDate?: string;
    tokens?: string;
}
export declare class SentimentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

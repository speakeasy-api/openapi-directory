import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetQueryRequest extends SpeakeasyBase {
    count?: number;
    inUrlPrefixes?: string;
    q: string;
    start?: number;
    subdomains?: string;
}
export declare class GetQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

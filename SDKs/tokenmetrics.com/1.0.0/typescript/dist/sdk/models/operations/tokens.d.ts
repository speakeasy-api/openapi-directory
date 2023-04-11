import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TokensRequest extends SpeakeasyBase {
    tokenIds?: string;
    tokenNames?: string;
    tokenSymbols?: string;
}
export declare class TokensResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

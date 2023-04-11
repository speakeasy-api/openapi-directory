import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SwapIndexesRequestBody extends SpeakeasyBase {
    indexes?: string[];
}
export declare class SwapIndexesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

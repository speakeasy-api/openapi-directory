import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFiltersFiltersRequest extends SpeakeasyBase {
    /**
     * String list (semicolon delimited).
     */
    filters: string;
}
export declare class GetFiltersFiltersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

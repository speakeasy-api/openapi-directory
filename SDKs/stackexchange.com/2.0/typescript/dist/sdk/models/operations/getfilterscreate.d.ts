import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFiltersCreateRequest extends SpeakeasyBase {
    base?: string;
    /**
     * String list (semicolon delimited).
     */
    exclude?: string;
    /**
     * String list (semicolon delimited).
     */
    include?: string;
    unsafe?: boolean;
}
export declare class GetFiltersCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

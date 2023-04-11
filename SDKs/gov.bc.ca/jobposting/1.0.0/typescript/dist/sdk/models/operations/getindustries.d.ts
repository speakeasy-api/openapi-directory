import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetIndustriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unexpected error
     */
    error?: shared.ErrorT;
    /**
     * An array of industries and sub industries
     */
    industries?: shared.Industry[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}

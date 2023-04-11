import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1FiltersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Excerpts of various filters in different contexts.
     */
    filters?: shared.Filter[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}

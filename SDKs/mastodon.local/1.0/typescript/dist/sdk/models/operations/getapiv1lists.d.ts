import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1ListsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Use id as a parameter for related API calls.
     */
    lists?: shared.List[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}

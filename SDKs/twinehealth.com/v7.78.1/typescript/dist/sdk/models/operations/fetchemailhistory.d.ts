import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchEmailHistoryRequest extends SpeakeasyBase {
    /**
     * Email history identifier
     */
    id: string;
}
export declare class FetchEmailHistoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    fetchEmailHistoryResponse?: shared.FetchEmailHistoryResponse;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApplicationDocumentsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the application in Noyo
     */
    applicationId: string;
    /**
     * The integer offset at which to start the page. Possible values are 0 to total_records - 1
     */
    offset?: number;
    /**
     * The max size of each page of results
     */
    pageSize?: number;
}
export declare class GetApplicationDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns all matching Application Documents
     */
    paginatedApplicationDocumentResult?: shared.PaginatedApplicationDocumentResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

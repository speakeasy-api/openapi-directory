import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetQuoteIdFromInternalIdRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    projectId: number;
}
export declare class GetQuoteIdFromInternalIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    /**
     * QuoteId
     */
    projectId?: shared.ProjectId;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

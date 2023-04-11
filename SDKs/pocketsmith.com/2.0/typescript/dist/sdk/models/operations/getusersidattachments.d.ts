import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdAttachmentsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the user.
     */
    id: number;
    /**
     * If set, returns unassigned attachments, that are available for assigning to a transaction.
     */
    unassigned?: number;
}
export declare class GetUsersIdAttachmentsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    attachments?: shared.Attachment[];
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

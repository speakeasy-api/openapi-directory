import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutAttachmentsIdRequestBody extends SpeakeasyBase {
    /**
     * The new title of the attachment. If the title is blank or not provided, the server will derive a title from the file name.
     */
    title?: string;
}
export declare class PutAttachmentsIdRequest extends SpeakeasyBase {
    requestBody?: PutAttachmentsIdRequestBody;
    /**
     * The unique identifier of the attachment.
     */
    id: number;
}
export declare class PutAttachmentsIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    attachment?: shared.Attachment;
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

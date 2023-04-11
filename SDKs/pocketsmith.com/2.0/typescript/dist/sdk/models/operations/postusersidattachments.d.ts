import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostUsersIdAttachmentsRequestBody extends SpeakeasyBase {
    /**
     * The base64-encoded contents of the source file. The supported file types are png, jpg, pdf, xls, xlsx, doc, docx.
     */
    fileData?: string;
    /**
     * The file name of the attachment.
     */
    fileName?: string;
    /**
     * The title of the attachment. If the title is blank or not provided, the title will derived from the file name.
     */
    title?: string;
}
export declare class PostUsersIdAttachmentsRequest extends SpeakeasyBase {
    requestBody?: PostUsersIdAttachmentsRequestBody;
    /**
     * The unique identifier of the user.
     */
    id: number;
}
export declare class PostUsersIdAttachmentsResponse extends SpeakeasyBase {
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

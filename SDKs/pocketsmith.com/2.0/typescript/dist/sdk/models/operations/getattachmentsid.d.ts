import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAttachmentsIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the attachment.
     */
    id: number;
}
export declare class GetAttachmentsIdResponse extends SpeakeasyBase {
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

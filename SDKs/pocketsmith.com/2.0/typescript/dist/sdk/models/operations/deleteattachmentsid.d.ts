import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteAttachmentsIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the attachment.
     */
    id: number;
}
export declare class DeleteAttachmentsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

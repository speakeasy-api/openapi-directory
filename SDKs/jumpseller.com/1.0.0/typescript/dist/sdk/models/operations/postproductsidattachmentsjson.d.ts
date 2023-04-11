import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostProductsIdAttachmentsJsonRequest extends SpeakeasyBase {
    /**
     * Product Attachment parameters.
     */
    attachmentEdit: shared.AttachmentEdit;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the Product
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class PostProductsIdAttachmentsJsonResponse extends SpeakeasyBase {
    /**
     * OK
     */
    attachment?: shared.Attachment;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

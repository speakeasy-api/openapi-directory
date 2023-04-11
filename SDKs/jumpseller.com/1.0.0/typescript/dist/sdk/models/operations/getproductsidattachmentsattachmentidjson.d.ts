import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductsIdAttachmentsAttachmentIdJsonRequest extends SpeakeasyBase {
    /**
     * Id of the Product Attachment
     */
    attachmentId: number;
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
export declare class GetProductsIdAttachmentsAttachmentIdJsonResponse extends SpeakeasyBase {
    /**
     * OK
     */
    attachment?: shared.Attachment;
    contentType: string;
    /**
     * Product Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

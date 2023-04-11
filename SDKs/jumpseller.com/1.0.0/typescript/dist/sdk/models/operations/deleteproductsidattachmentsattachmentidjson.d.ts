import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteProductsIdAttachmentsAttachmentIdJsonRequest extends SpeakeasyBase {
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
export declare class DeleteProductsIdAttachmentsAttachmentIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Product Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    deleteProductsIdAttachmentsAttachmentIdJSON200ApplicationJSONString?: string;
}

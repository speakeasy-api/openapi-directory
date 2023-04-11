import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsCreateContentAttachmentRequestBody extends SpeakeasyBase {
    /**
     * The body of the attachment
     */
    body: string;
    /**
     * The title of the attachment
     */
    title: string;
}
export declare class AppsCreateContentAttachmentRequest extends SpeakeasyBase {
    requestBody: AppsCreateContentAttachmentRequestBody;
    /**
     * The `id` of the `content_reference` event.
     */
    contentReferenceId: number;
    /**
     * The owner of the repository. Determined from the `repository` `full_name` of the `content_reference` event.
     */
    owner: string;
    /**
     * The name of the repository. Determined from the `repository` `full_name` of the `content_reference` event.
     */
    repo: string;
}
/**
 * Preview header missing
 */
export declare class AppsCreateContentAttachment415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class AppsCreateContentAttachmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Preview header missing
     */
    appsCreateContentAttachment415ApplicationJSONObject?: AppsCreateContentAttachment415ApplicationJSON;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    contentReferenceAttachment?: shared.ContentReferenceAttachment;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}

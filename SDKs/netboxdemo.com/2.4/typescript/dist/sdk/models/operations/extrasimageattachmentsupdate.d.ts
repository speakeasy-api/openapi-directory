import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasImageAttachmentsUpdateRequest extends SpeakeasyBase {
    imageAttachmentInput: shared.ImageAttachmentInput;
    /**
     * A unique integer value identifying this image attachment.
     */
    id: number;
}
export declare class ExtrasImageAttachmentsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    imageAttachment?: shared.ImageAttachment;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

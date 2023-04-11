import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasImageAttachmentsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this image attachment.
     */
    id: number;
}
export declare class ExtrasImageAttachmentsReadResponse extends SpeakeasyBase {
    contentType: string;
    imageAttachment?: shared.ImageAttachment;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

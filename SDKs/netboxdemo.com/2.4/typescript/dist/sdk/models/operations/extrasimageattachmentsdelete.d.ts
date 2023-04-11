import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExtrasImageAttachmentsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this image attachment.
     */
    id: number;
}
export declare class ExtrasImageAttachmentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

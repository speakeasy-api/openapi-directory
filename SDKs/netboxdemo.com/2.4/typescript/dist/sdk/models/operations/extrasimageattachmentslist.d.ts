import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasImageAttachmentsListRequest extends SpeakeasyBase {
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
}
export declare class ExtrasImageAttachmentsList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.ImageAttachment[];
}
export declare class ExtrasImageAttachmentsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    extrasImageAttachmentsList200ApplicationJSONObject?: ExtrasImageAttachmentsList200ApplicationJSON;
}

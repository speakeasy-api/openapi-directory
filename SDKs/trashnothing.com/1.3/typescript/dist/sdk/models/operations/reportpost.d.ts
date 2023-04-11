import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReportPostRequestBody extends SpeakeasyBase {
    /**
     * An explanation from the current user for why they are reporting this post.   This is useful for users to provide evidence or explain why there is a problem with the post. <br /><br /> NOTE: If reason is set to 'other', details are required.
     *
     * @remarks
     *
     */
    details?: string;
    /**
     * The reason that this post is being reported.  Must be one of: 'spam', 'not free (for sale/trade/borrow)', 'illegal item', 'not family-friendly', 'other', 'mislabeled: is a Want', 'mislabeled: is an Offer'. <br /><br /> NOTE: If reason is set to 'other', the details parameter is required to be set.
     *
     * @remarks
     *
     */
    reason: string;
}
export declare class ReportPostRequest extends SpeakeasyBase {
    requestBody: ReportPostRequestBody;
    postId: string;
}
export declare class ReportPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

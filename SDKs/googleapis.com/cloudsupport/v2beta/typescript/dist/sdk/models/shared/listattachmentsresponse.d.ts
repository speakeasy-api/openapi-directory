import { SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
/**
 * The response message for the ListAttachments endpoint.
 */
export declare class ListAttachmentsResponse extends SpeakeasyBase {
    /**
     * The list of attachments associated with the given case.
     */
    attachments?: Attachment[];
    /**
     * A token to retrieve the next page of results. This should be set in the `page_token` field of subsequent `cases.attachments.list` requests. If unspecified, there are no more results to retrieve.
     */
    nextPageToken?: string;
}

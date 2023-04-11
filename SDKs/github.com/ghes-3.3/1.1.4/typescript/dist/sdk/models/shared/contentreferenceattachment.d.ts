import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Content Reference attachments allow you to provide context around URLs posted in comments
 */
export declare class ContentReferenceAttachment extends SpeakeasyBase {
    /**
     * The body of the attachment
     */
    body: string;
    /**
     * The ID of the attachment
     */
    id: number;
    /**
     * The node_id of the content attachment
     */
    nodeId?: string;
    /**
     * The title of the attachment
     */
    title: string;
}

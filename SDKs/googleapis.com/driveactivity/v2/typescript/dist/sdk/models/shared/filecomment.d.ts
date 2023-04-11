import { SpeakeasyBase } from "../../../internal/utils";
import { DriveItem } from "./driveitem";
/**
 * A comment on a file.
 */
export declare class FileComment extends SpeakeasyBase {
    /**
     * The comment in the discussion thread. This identifier is an opaque string compatible with the Drive API; see https://developers.google.com/drive/v3/reference/comments/get
     */
    legacyCommentId?: string;
    /**
     * The discussion thread to which the comment was added. This identifier is an opaque string compatible with the Drive API and references the first comment in a discussion; see https://developers.google.com/drive/v3/reference/comments/get
     */
    legacyDiscussionId?: string;
    /**
     * The link to the discussion thread containing this comment, for example, `https://docs.google.com/DOCUMENT_ID/edit?disco=THREAD_ID`.
     */
    linkToDiscussion?: string;
    /**
     * A Drive item, such as a file or folder.
     */
    parent?: DriveItem;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * A revision of a file.
 */
export declare class Revision extends SpeakeasyBase {
    downloadUrl?: string;
    /**
     * The ETag of the revision.
     */
    etag?: string;
    /**
     * Links for exporting Docs Editors files to specific formats.
     */
    exportLinks?: Record<string, string>;
    /**
     * The size of the revision in bytes. This will only be populated on files with content stored in Drive.
     */
    fileSize?: string;
    /**
     * The ID of the revision.
     */
    id?: string;
    /**
     * This is always drive#revision.
     */
    kind?: string;
    /**
     * Information about a Drive user.
     */
    lastModifyingUser?: User;
    /**
     * Name of the last user to modify this revision.
     */
    lastModifyingUserName?: string;
    /**
     * An MD5 checksum for the content of this revision. This will only be populated on files with content stored in Drive.
     */
    md5Checksum?: string;
    /**
     * The MIME type of the revision.
     */
    mimeType?: string;
    /**
     * Last time this revision was modified (formatted RFC 3339 timestamp).
     */
    modifiedDate?: Date;
    /**
     * The original filename when this revision was created. This will only be populated on files with content stored in Drive.
     */
    originalFilename?: string;
    /**
     * Whether this revision is pinned to prevent automatic purging. If not set, the revision is automatically purged 30 days after newer content is uploaded. This field can only be modified on files with content stored in Drive, excluding Docs Editors files. Revisions can also be pinned when they are created through the drive.files.insert/update/copy by using the pinned query parameter. Pinned revisions are stored indefinitely using additional storage quota, up to a maximum of 200 revisions.
     */
    pinned?: boolean;
    /**
     * Whether subsequent revisions will be automatically republished. This is only populated and can only be modified for Docs Editors files.
     */
    publishAuto?: boolean;
    /**
     * Whether this revision is published. This is only populated and can only be modified for Docs Editors files.
     */
    published?: boolean;
    /**
     * A link to the published revision. This is only populated for Google Sites files.
     */
    publishedLink?: string;
    /**
     * Whether this revision is published outside the domain. This is only populated and can only be modified for Docs Editors files.
     */
    publishedOutsideDomain?: boolean;
    /**
     * A link back to this revision.
     */
    selfLink?: string;
}

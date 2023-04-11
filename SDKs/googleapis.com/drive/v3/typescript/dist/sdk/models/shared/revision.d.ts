import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * The metadata for a revision to a file.
 */
export declare class Revision extends SpeakeasyBase {
    /**
     * Links for exporting Docs Editors files to specific formats.
     */
    exportLinks?: Record<string, string>;
    /**
     * The ID of the revision.
     */
    id?: string;
    /**
     * Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file.
     *
     * @remarks
     * This field is only applicable to files with binary content in Drive.
     */
    keepForever?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#revision".
     */
    kind?: string;
    /**
     * Information about a Drive user.
     */
    lastModifyingUser?: User;
    /**
     * The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive.
     */
    md5Checksum?: string;
    /**
     * The MIME type of the revision.
     */
    mimeType?: string;
    /**
     * The last time the revision was modified (RFC 3339 date-time).
     */
    modifiedTime?: Date;
    /**
     * The original filename used to create this revision. This is only applicable to files with binary content in Drive.
     */
    originalFilename?: string;
    /**
     * Whether subsequent revisions will be automatically republished. This is only applicable to Docs Editors files.
     */
    publishAuto?: boolean;
    /**
     * Whether this revision is published. This is only applicable to Docs Editors files.
     */
    published?: boolean;
    /**
     * A link to the published revision. This is only populated for Google Sites files.
     */
    publishedLink?: string;
    /**
     * Whether this revision is published outside the domain. This is only applicable to Docs Editors files.
     */
    publishedOutsideDomain?: boolean;
    /**
     * The size of the revision's content in bytes. This is only applicable to files with binary content in Drive.
     */
    size?: string;
}

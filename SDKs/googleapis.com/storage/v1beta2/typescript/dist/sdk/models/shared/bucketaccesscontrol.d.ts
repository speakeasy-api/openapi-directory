import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An access-control entry.
 */
export declare class BucketAccessControl extends SpeakeasyBase {
    /**
     * The name of the bucket.
     */
    bucket?: string;
    /**
     * The domain associated with the entity, if any.
     */
    domain?: string;
    /**
     * The email address associated with the entity, if any.
     */
    email?: string;
    /**
     * The entity holding the permission, in one of the following forms:
     *
     * @remarks
     * - user-userId
     * - user-email
     * - group-groupId
     * - group-email
     * - domain-domain
     * - allUsers
     * - allAuthenticatedUsers Examples:
     * - The user liz@example.com would be user-liz@example.com.
     * - The group example@googlegroups.com would be group-example@googlegroups.com.
     * - To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
     */
    entity?: string;
    /**
     * The ID for the entity, if any.
     */
    entityId?: string;
    /**
     * HTTP 1.1 Entity tag for the access-control entry.
     */
    etag?: string;
    /**
     * The ID of the access-control entry.
     */
    id?: string;
    /**
     * The kind of item this is. For bucket access control entries, this is always storage#bucketAccessControl.
     */
    kind?: string;
    /**
     * The access permission for the entity. Can be READER, WRITER, or OWNER.
     */
    role?: string;
    /**
     * The link to this access-control entry.
     */
    selfLink?: string;
}

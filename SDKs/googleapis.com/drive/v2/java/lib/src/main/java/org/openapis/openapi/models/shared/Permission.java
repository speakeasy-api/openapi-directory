/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * Permission - A permission for a file.
 */
public class Permission {
    /**
     * Additional roles for this user. Only commenter is currently allowed, though more may be supported in the future.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalRoles")
    public String[] additionalRoles;

    public Permission withAdditionalRoles(String[] additionalRoles) {
        this.additionalRoles = additionalRoles;
        return this;
    }
    
    /**
     * Deprecated.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authKey")
    public String authKey;

    public Permission withAuthKey(String authKey) {
        this.authKey = authKey;
        return this;
    }
    
    /**
     * Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;

    public Permission withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    
    /**
     * The domain name of the entity this permission refers to. This is an output-only field which is present when the permission type is user, group or domain.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;

    public Permission withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    
    /**
     * The email address of the user or group this permission refers to. This is an output-only field which is present when the permission type is user or group.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddress")
    public String emailAddress;

    public Permission withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    
    /**
     * The ETag of the permission.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;

    public Permission withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    
    /**
     * The time at which this permission will expire (RFC 3339 date-time). Expiration dates have the following restrictions:  
     * - They cannot be set on shared drive items 
     * - They can only be set on user and group permissions 
     * - The date must be in the future 
     * - The date cannot be more than a year in the future
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("expirationDate")
    public OffsetDateTime expirationDate;

    public Permission withExpirationDate(OffsetDateTime expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    
    /**
     * The ID of the user this permission refers to, and identical to the permissionId in the About and Files resources. When making a drive.permissions.insert request, exactly one of the id or value fields must be specified unless the permission type is anyone, in which case both id and value are ignored.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public Permission withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * This is always drive#permission.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public Permission withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    /**
     * The name for this permission.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public Permission withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * Whether the account associated with this permission is a pending owner. Only populated for user type permissions for files that are not in a shared drive.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pendingOwner")
    public Boolean pendingOwner;

    public Permission withPendingOwner(Boolean pendingOwner) {
        this.pendingOwner = pendingOwner;
        return this;
    }
    
    /**
     * Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissionDetails")
    public PermissionPermissionDetails[] permissionDetails;

    public Permission withPermissionDetails(PermissionPermissionDetails[] permissionDetails) {
        this.permissionDetails = permissionDetails;
        return this;
    }
    
    /**
     * A link to the profile photo, if available.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photoLink")
    public String photoLink;

    public Permission withPhotoLink(String photoLink) {
        this.photoLink = photoLink;
        return this;
    }
    
    /**
     * The primary role for this user. While new values may be supported in the future, the following are currently allowed:  
     * - owner 
     * - organizer 
     * - fileOrganizer 
     * - writer 
     * - reader
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;

    public Permission withRole(String role) {
        this.role = role;
        return this;
    }
    
    /**
     * A link back to this permission.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;

    public Permission withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    
    /**
     * Deprecated - use permissionDetails instead.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teamDrivePermissionDetails")
    public PermissionTeamDrivePermissionDetails[] teamDrivePermissionDetails;

    public Permission withTeamDrivePermissionDetails(PermissionTeamDrivePermissionDetails[] teamDrivePermissionDetails) {
        this.teamDrivePermissionDetails = teamDrivePermissionDetails;
        return this;
    }
    
    /**
     * The account type. Allowed values are:  
     * - user 
     * - group 
     * - domain 
     * - anyone
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;

    public Permission withType(String type) {
        this.type = type;
        return this;
    }
    
    /**
     * The email address or domain name for the entity. This is used during inserts and is not populated in responses. When making a drive.permissions.insert request, exactly one of the id or value fields must be specified unless the permission type is anyone, in which case both id and value are ignored.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;

    public Permission withValue(String value) {
        this.value = value;
        return this;
    }
    
    /**
     * Indicates the view for this permission. Only populated for permissions that belong to a view. published is the only supported value.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public String view;

    public Permission withView(String view) {
        this.view = view;
        return this;
    }
    
    /**
     * Whether the link is required for this permission.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("withLink")
    public Boolean withLink;

    public Permission withWithLink(Boolean withLink) {
        this.withLink = withLink;
        return this;
    }
    
    public Permission(){}
}

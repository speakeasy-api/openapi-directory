package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Permission
 * A permission for a file.
**/
public class Permission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalRoles")
    public String[] additionalRoles;
    public Permission withAdditionalRoles(String[] additionalRoles) {
        this.additionalRoles = additionalRoles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authKey")
    public String authKey;
    public Permission withAuthKey(String authKey) {
        this.authKey = authKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public Permission withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public Permission withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddress")
    public String emailAddress;
    public Permission withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Permission withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expirationDate")
    public OffsetDateTime expirationDate;
    public Permission withExpirationDate(OffsetDateTime expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Permission withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Permission withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Permission withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pendingOwner")
    public Boolean pendingOwner;
    public Permission withPendingOwner(Boolean pendingOwner) {
        this.pendingOwner = pendingOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissionDetails")
    public PermissionPermissionDetails[] permissionDetails;
    public Permission withPermissionDetails(PermissionPermissionDetails[] permissionDetails) {
        this.permissionDetails = permissionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photoLink")
    public String photoLink;
    public Permission withPhotoLink(String photoLink) {
        this.photoLink = photoLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public Permission withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public Permission withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teamDrivePermissionDetails")
    public PermissionTeamDrivePermissionDetails[] teamDrivePermissionDetails;
    public Permission withTeamDrivePermissionDetails(PermissionTeamDrivePermissionDetails[] teamDrivePermissionDetails) {
        this.teamDrivePermissionDetails = teamDrivePermissionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Permission withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Permission withValue(String value) {
        this.value = value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public String view;
    public Permission withView(String view) {
        this.view = view;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("withLink")
    public Boolean withLink;
    public Permission withWithLink(Boolean withLink) {
        this.withLink = withLink;
        return this;
    }
}
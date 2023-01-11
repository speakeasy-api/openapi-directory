package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * User
 * Information about a Drive user.
**/
public class User {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public User withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddress")
    public String emailAddress;
    public User withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public User withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("me")
    public Boolean me;
    public User withMe(Boolean me) {
        this.me = me;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissionId")
    public String permissionId;
    public User withPermissionId(String permissionId) {
        this.permissionId = permissionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photoLink")
    public String photoLink;
    public User withPhotoLink(String photoLink) {
        this.photoLink = photoLink;
        return this;
    }
}
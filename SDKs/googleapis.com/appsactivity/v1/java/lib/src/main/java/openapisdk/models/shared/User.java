package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * User
 * A representation of a user.
**/
public class User {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDeleted")
    public Boolean isDeleted;
    public User withIsDeleted(Boolean isDeleted) {
        this.isDeleted = isDeleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isMe")
    public Boolean isMe;
    public User withIsMe(Boolean isMe) {
        this.isMe = isMe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public User withName(String name) {
        this.name = name;
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
    @JsonProperty("photo")
    public Photo photo;
    public User withPhoto(Photo photo) {
        this.photo = photo;
        return this;
    }
}
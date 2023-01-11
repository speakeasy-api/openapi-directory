package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntityUserLinkInput
 * JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
**/
public class EntityUserLinkInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity")
    public EntityUserLinkEntity entity;
    public EntityUserLinkInput withEntity(EntityUserLinkEntity entity) {
        this.entity = entity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public EntityUserLinkInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public EntityUserLinkInput withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public EntityUserLinkPermissionsInput permissions;
    public EntityUserLinkInput withPermissions(EntityUserLinkPermissionsInput permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public EntityUserLinkInput withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userRef")
    public UserRef userRef;
    public EntityUserLinkInput withUserRef(UserRef userRef) {
        this.userRef = userRef;
        return this;
    }
}
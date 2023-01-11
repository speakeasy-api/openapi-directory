package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntityUserLink
 * JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
**/
public class EntityUserLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity")
    public EntityUserLinkEntity entity;
    public EntityUserLink withEntity(EntityUserLinkEntity entity) {
        this.entity = entity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public EntityUserLink withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public EntityUserLink withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public EntityUserLinkPermissions permissions;
    public EntityUserLink withPermissions(EntityUserLinkPermissions permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public EntityUserLink withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userRef")
    public UserRef userRef;
    public EntityUserLink withUserRef(UserRef userRef) {
        this.userRef = userRef;
        return this;
    }
}
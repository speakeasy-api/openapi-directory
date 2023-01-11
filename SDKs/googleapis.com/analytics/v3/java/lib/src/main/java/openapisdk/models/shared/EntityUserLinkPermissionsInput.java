package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntityUserLinkPermissionsInput
 * Permissions the user has for this entity.
**/
public class EntityUserLinkPermissionsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("local")
    public String[] local;
    public EntityUserLinkPermissionsInput withLocal(String[] local) {
        this.local = local;
        return this;
    }
}
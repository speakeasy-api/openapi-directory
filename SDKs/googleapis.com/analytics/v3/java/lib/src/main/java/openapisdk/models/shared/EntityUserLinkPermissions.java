package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntityUserLinkPermissions
 * Permissions the user has for this entity.
**/
public class EntityUserLinkPermissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effective")
    public String[] effective;
    public EntityUserLinkPermissions withEffective(String[] effective) {
        this.effective = effective;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("local")
    public String[] local;
    public EntityUserLinkPermissions withLocal(String[] local) {
        this.local = local;
        return this;
    }
}
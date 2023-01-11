package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Matter
 * Represents a matter. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
**/
public class Matter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Matter withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matterId")
    public String matterId;
    public Matter withMatterId(String matterId) {
        this.matterId = matterId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matterPermissions")
    public MatterPermission[] matterPermissions;
    public Matter withMatterPermissions(MatterPermission[] matterPermissions) {
        this.matterPermissions = matterPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Matter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public MatterStateEnum state;
    public Matter withState(MatterStateEnum state) {
        this.state = state;
        return this;
    }
}
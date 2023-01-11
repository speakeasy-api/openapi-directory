package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SqlServerUserDetails
 * Represents a Sql Server user on the Cloud SQL instance.
**/
public class SqlServerUserDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public SqlServerUserDetails withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverRoles")
    public String[] serverRoles;
    public SqlServerUserDetails withServerRoles(String[] serverRoles) {
        this.serverRoles = serverRoles;
        return this;
    }
}
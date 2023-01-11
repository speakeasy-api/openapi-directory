package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Permissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public String[] permissions;
    public Permissions withPermissions(String[] permissions) {
        this.permissions = permissions;
        return this;
    }
}
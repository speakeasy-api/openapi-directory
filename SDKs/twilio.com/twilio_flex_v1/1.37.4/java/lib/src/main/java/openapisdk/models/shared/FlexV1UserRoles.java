package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FlexV1UserRoles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public String[] roles;
    public FlexV1UserRoles withRoles(String[] roles) {
        this.roles = roles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public FlexV1UserRoles withUrl(String url) {
        this.url = url;
        return this;
    }
}
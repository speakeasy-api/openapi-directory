package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3Status {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health")
    public Integer health;
    public V3Status withHealth(Integer health) {
        this.health = health;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public V3Status withVersion(String version) {
        this.version = version;
        return this;
    }
}
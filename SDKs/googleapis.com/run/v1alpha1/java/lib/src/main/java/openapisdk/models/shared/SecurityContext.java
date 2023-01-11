package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecurityContext
 * Not supported by Cloud Run SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext. When both are set, the values in SecurityContext take precedence.
**/
public class SecurityContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runAsUser")
    public Integer runAsUser;
    public SecurityContext withRunAsUser(Integer runAsUser) {
        this.runAsUser = runAsUser;
        return this;
    }
}
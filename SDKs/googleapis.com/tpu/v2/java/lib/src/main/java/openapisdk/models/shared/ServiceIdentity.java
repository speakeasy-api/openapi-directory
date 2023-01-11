package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceIdentity
 * The per-product per-project service identity for Cloud TPU service.
**/
public class ServiceIdentity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ServiceIdentity withEmail(String email) {
        this.email = email;
        return this;
    }
}
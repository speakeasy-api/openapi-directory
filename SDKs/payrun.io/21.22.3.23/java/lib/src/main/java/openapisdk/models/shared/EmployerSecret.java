package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EmployerSecret {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployerSecret")
    public EmployerSecretEmployerSecret employerSecret;
    public EmployerSecret withEmployerSecret(EmployerSecretEmployerSecret employerSecret) {
        this.employerSecret = employerSecret;
        return this;
    }
}
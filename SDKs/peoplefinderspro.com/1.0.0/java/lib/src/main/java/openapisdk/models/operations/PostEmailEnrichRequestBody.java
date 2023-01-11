package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostEmailEnrichRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Email")
    public String email;
    public PostEmailEnrichRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
}
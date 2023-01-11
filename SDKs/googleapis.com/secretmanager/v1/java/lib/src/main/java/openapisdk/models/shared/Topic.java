package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Topic
 * A Pub/Sub topic which Secret Manager will publish to when control plane events occur on this secret.
**/
public class Topic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Topic withName(String name) {
        this.name = name;
        return this;
    }
}
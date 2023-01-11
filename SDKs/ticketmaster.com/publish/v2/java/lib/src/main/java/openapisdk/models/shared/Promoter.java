package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Promoter
 * Promoter
**/
public class Promoter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("descriptions")
    public java.util.Map<String, String> descriptions;
    public Promoter withDescriptions(java.util.Map<String, String> descriptions) {
        this.descriptions = descriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Promoter withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public java.util.Map<String, String> names;
    public Promoter withNames(java.util.Map<String, String> names) {
        this.names = names;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestValidateQuery
 * Validation results
**/
public class TestValidateQuery {
    @JsonProperty("id")
    public Long id;
    public TestValidateQuery withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String[] tag;
    public TestValidateQuery withTag(String[] tag) {
        this.tag = tag;
        return this;
    }
}
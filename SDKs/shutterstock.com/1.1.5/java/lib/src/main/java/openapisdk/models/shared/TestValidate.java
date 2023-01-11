package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestValidate
 * Validation results
**/
public class TestValidate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("header")
    public TestValidateHeader header;
    public TestValidate withHeader(TestValidateHeader header) {
        this.header = header;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public TestValidateQuery query;
    public TestValidate withQuery(TestValidateQuery query) {
        this.query = query;
        return this;
    }
}
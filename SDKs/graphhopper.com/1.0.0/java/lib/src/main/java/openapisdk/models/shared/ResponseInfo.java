package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResponseInfo
 * Additional information for your request
**/
public class ResponseInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyrights")
    public String[] copyrights;
    public ResponseInfo withCopyrights(String[] copyrights) {
        this.copyrights = copyrights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("took")
    public Double took;
    public ResponseInfo withTook(Double took) {
        this.took = took;
        return this;
    }
}
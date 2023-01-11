package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResponseStatusCode
 * A status to accept. Either a status code class like "2xx", or an integer status code like "200".
**/
public class ResponseStatusCode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusClass")
    public ResponseStatusCodeStatusClassEnum statusClass;
    public ResponseStatusCode withStatusClass(ResponseStatusCodeStatusClassEnum statusClass) {
        this.statusClass = statusClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusValue")
    public Integer statusValue;
    public ResponseStatusCode withStatusValue(Integer statusValue) {
        this.statusValue = statusValue;
        return this;
    }
}
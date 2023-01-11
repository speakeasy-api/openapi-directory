package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error
 * Detailed information about an error category.
**/
public class Error {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pointCount")
    public Integer pointCount;
    public Error withPointCount(Integer pointCount) {
        this.pointCount = pointCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Status status;
    public Error withStatus(Status status) {
        this.status = status;
        return this;
    }
}
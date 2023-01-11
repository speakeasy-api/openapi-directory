package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetJobById404ApplicationProblemPlusJson
 * Problem details object returned on errors
**/
public class GetJobById404ApplicationProblemPlusJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public GetJobById404ApplicationProblemPlusJson withStatus(Long status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GetJobById404ApplicationProblemPlusJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetJobById404ApplicationProblemPlusJson withType(String type) {
        this.type = type;
        return this;
    }
}
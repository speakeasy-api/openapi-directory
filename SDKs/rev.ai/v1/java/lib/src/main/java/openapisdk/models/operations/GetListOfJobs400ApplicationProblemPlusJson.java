package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetListOfJobs400ApplicationProblemPlusJson
 * Problem details object returned on errors
**/
public class GetListOfJobs400ApplicationProblemPlusJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, Object> parameters;
    public GetListOfJobs400ApplicationProblemPlusJson withParameters(java.util.Map<String, Object> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public GetListOfJobs400ApplicationProblemPlusJson withStatus(Long status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GetListOfJobs400ApplicationProblemPlusJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetListOfJobs400ApplicationProblemPlusJson withType(String type) {
        this.type = type;
        return this;
    }
}
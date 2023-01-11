package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResultResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result_file_url")
    public String resultFileUrl;
    public ResultResponse withResultFileUrl(String resultFileUrl) {
        this.resultFileUrl = resultFileUrl;
        return this;
    }
}
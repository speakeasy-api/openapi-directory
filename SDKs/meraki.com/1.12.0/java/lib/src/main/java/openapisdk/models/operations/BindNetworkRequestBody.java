package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BindNetworkRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoBind")
    public Boolean autoBind;
    public BindNetworkRequestBody withAutoBind(Boolean autoBind) {
        this.autoBind = autoBind;
        return this;
    }
    @JsonProperty("configTemplateId")
    public String configTemplateId;
    public BindNetworkRequestBody withConfigTemplateId(String configTemplateId) {
        this.configTemplateId = configTemplateId;
        return this;
    }
}
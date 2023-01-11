package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public GetTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
}
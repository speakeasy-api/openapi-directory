package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project_id")
    public Long projectId;
    public ProjectResponse withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project_number")
    public Long projectNumber;
    public ProjectResponse withProjectNumber(Long projectNumber) {
        this.projectNumber = projectNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result_file_id")
    public String resultFileId;
    public ProjectResponse withResultFileId(String resultFileId) {
        this.resultFileId = resultFileId;
        return this;
    }
}
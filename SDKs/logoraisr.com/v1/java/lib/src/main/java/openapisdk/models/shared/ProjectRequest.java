package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectRequest {
    @JsonProperty("file_id")
    public String fileId;
    public ProjectRequest withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("process")
    public Process process;
    public ProjectRequest withProcess(Process process) {
        this.process = process;
        return this;
    }
    @JsonProperty("project_title")
    public String projectTitle;
    public ProjectRequest withProjectTitle(String projectTitle) {
        this.projectTitle = projectTitle;
        return this;
    }
}
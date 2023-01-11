package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListWorkflowTemplatesResponse
 * A response to a request to list workflow templates in a project.
**/
public class ListWorkflowTemplatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListWorkflowTemplatesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templates")
    public WorkflowTemplate[] templates;
    public ListWorkflowTemplatesResponse withTemplates(WorkflowTemplate[] templates) {
        this.templates = templates;
        return this;
    }
}
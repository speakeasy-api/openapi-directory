package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RunTaskRequest
 * Request message for forcing a task to run now using RunTask.
**/
public class RunTaskRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseView")
    public RunTaskRequestResponseViewEnum responseView;
    public RunTaskRequest withResponseView(RunTaskRequestResponseViewEnum responseView) {
        this.responseView = responseView;
        return this;
    }
}
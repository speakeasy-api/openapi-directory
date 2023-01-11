package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecutionInput
 * The definition of a single executed notebook.
**/
public class ExecutionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ExecutionInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionTemplate")
    public ExecutionTemplate executionTemplate;
    public ExecutionInput withExecutionTemplate(ExecutionTemplate executionTemplate) {
        this.executionTemplate = executionTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputNotebookFile")
    public String outputNotebookFile;
    public ExecutionInput withOutputNotebookFile(String outputNotebookFile) {
        this.outputNotebookFile = outputNotebookFile;
        return this;
    }
}
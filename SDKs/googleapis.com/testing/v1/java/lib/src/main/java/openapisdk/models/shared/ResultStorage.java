package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResultStorage
 * Locations where the results of running the test are stored.
**/
public class ResultStorage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleCloudStorage")
    public GoogleCloudStorage googleCloudStorage;
    public ResultStorage withGoogleCloudStorage(GoogleCloudStorage googleCloudStorage) {
        this.googleCloudStorage = googleCloudStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resultsUrl")
    public String resultsUrl;
    public ResultStorage withResultsUrl(String resultsUrl) {
        this.resultsUrl = resultsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toolResultsExecution")
    public ToolResultsExecution toolResultsExecution;
    public ResultStorage withToolResultsExecution(ToolResultsExecution toolResultsExecution) {
        this.toolResultsExecution = toolResultsExecution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toolResultsHistory")
    public ToolResultsHistory toolResultsHistory;
    public ResultStorage withToolResultsHistory(ToolResultsHistory toolResultsHistory) {
        this.toolResultsHistory = toolResultsHistory;
        return this;
    }
}
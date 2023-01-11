package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LogsPanel
 * A widget that displays a stream of log.
**/
public class LogsPanel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public LogsPanel withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceNames")
    public String[] resourceNames;
    public LogsPanel withResourceNames(String[] resourceNames) {
        this.resourceNames = resourceNames;
        return this;
    }
}
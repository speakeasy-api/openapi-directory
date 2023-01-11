package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1Report
 * The ID and description of a report that was used to generate report data. For example, "GCP Daily Spend", "Google Workspace License Activity", etc.
**/
public class GoogleCloudChannelV1Report {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columns")
    public GoogleCloudChannelV1Column[] columns;
    public GoogleCloudChannelV1Report withColumns(GoogleCloudChannelV1Column[] columns) {
        this.columns = columns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudChannelV1Report withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudChannelV1Report withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudChannelV1Report withName(String name) {
        this.name = name;
        return this;
    }
}
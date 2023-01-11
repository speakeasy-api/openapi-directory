package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2LabelProperties
 * Basic properties of the label.
**/
public class GoogleAppsDriveLabelsV2LabelProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleAppsDriveLabelsV2LabelProperties withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GoogleAppsDriveLabelsV2LabelProperties withTitle(String title) {
        this.title = title;
        return this;
    }
}
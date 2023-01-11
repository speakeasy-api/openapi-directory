package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileLabelInfo
 * An overview of the labels on the file.
**/
public class FileLabelInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public Label[] labels;
    public FileLabelInfo withLabels(Label[] labels) {
        this.labels = labels;
        return this;
    }
}
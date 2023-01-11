package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LabelSummary
 * Contains the labels array that contains all the labels for the dataset.
**/
public class LabelSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public Label[] labels;
    public LabelSummary withLabels(Label[] labels) {
        this.labels = labels;
        return this;
    }
}
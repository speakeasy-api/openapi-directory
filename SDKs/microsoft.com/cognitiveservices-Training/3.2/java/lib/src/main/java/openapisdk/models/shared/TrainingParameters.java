package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * TrainingParameters
 * Parameters used for training.
**/
public class TrainingParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedTags")
@SpeakeasyMetadata("form:name=selectedTags")
    public String[] selectedTags;
    public TrainingParameters withSelectedTags(String[] selectedTags) {
        this.selectedTags = selectedTags;
        return this;
    }
}
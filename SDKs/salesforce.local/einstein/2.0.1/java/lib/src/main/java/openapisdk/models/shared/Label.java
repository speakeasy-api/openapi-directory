package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Label
 * Contains information about the label with which the example is associated.
**/
public class Label {
    @JsonProperty("datasetId")
    public Long datasetId;
    public Label withDatasetId(Long datasetId) {
        this.datasetId = datasetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Label withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Label withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numExamples")
    public Long numExamples;
    public Label withNumExamples(Long numExamples) {
        this.numExamples = numExamples;
        return this;
    }
}
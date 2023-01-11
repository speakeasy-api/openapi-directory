package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchNameIn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properNouns")
    public NameIn[] properNouns;
    public BatchNameIn withProperNouns(NameIn[] properNouns) {
        this.properNouns = properNouns;
        return this;
    }
}
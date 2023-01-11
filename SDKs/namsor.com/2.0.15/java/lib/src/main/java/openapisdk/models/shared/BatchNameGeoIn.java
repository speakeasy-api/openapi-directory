package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchNameGeoIn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properNouns")
    public NameGeoIn[] properNouns;
    public BatchNameGeoIn withProperNouns(NameGeoIn[] properNouns) {
        this.properNouns = properNouns;
        return this;
    }
}
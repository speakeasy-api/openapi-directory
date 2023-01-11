package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWordSenses200ApplicationJsonFeatures {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Double index;
    public ListWordSenses200ApplicationJsonFeatures withIndex(Double index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ListWordSenses200ApplicationJsonFeatures withValue(String value) {
        this.value = value;
        return this;
    }
}
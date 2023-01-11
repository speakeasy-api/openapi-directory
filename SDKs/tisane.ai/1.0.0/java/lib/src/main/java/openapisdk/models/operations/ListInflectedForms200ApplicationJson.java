package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInflectedForms200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public ListInflectedForms200ApplicationJsonFeatures[] features;
    public ListInflectedForms200ApplicationJson withFeatures(ListInflectedForms200ApplicationJsonFeatures[] features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isLemma")
    public Boolean isLemma;
    public ListInflectedForms200ApplicationJson withIsLemma(Boolean isLemma) {
        this.isLemma = isLemma;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public ListInflectedForms200ApplicationJson withText(String text) {
        this.text = text;
        return this;
    }
}
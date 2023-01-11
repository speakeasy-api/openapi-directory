package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecognizedEntity
 * An entity is a single piece of data that was recognized in unstructured text.  For example, a city, a postal code, package dimensions, insured value, etc.  Each entity includes the original text and the parsed value.
 * 
**/
public class RecognizedEntity {
    @JsonProperty("end_index")
    public Long endIndex;
    public RecognizedEntity withEndIndex(Long endIndex) {
        this.endIndex = endIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public java.util.Map<String, Object> result;
    public RecognizedEntity withResult(java.util.Map<String, Object> result) {
        this.result = result;
        return this;
    }
    @JsonProperty("score")
    public Double score;
    public RecognizedEntity withScore(Double score) {
        this.score = score;
        return this;
    }
    @JsonProperty("start_index")
    public Long startIndex;
    public RecognizedEntity withStartIndex(Long startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    @JsonProperty("text")
    public String text;
    public RecognizedEntity withText(String text) {
        this.text = text;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public RecognizedEntity withType(String type) {
        this.type = type;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SpanScore
 * This is a single score for a given span of text.
**/
public class SpanScore {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("begin")
    public Integer begin;
    public SpanScore withBegin(Integer begin) {
        this.begin = begin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Integer end;
    public SpanScore withEnd(Integer end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Score score;
    public SpanScore withScore(Score score) {
        this.score = score;
        return this;
    }
}
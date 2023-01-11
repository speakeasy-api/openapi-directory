package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NameMatchedOut
 * Classified matched names
**/
public class NameMatchedOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public NameMatchedOut withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchStatus")
    public String matchStatus;
    public NameMatchedOut withMatchStatus(String matchStatus) {
        this.matchStatus = matchStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Double score;
    public NameMatchedOut withScore(Double score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public NameMatchedOut withScript(String script) {
        this.script = script;
        return this;
    }
}
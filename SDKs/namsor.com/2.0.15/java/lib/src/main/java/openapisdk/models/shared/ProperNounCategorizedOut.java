package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProperNounCategorizedOut
 * Classified typed proper names
**/
public class ProperNounCategorizedOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commonType")
    public String commonType;
    public ProperNounCategorizedOut withCommonType(String commonType) {
        this.commonType = commonType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commonTypeAlt")
    public String commonTypeAlt;
    public ProperNounCategorizedOut withCommonTypeAlt(String commonTypeAlt) {
        this.commonTypeAlt = commonTypeAlt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ProperNounCategorizedOut withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ProperNounCategorizedOut withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Double score;
    public ProperNounCategorizedOut withScore(Double score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public ProperNounCategorizedOut withScript(String script) {
        this.script = script;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Sentiment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public Sentiment withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Integer end;
    public Sentiment withEnd(Integer end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negationTerm")
    public String negationTerm;
    public Sentiment withNegationTerm(String negationTerm) {
        this.negationTerm = negationTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentCategory")
    public String parentCategory;
    public Sentiment withParentCategory(String parentCategory) {
        this.parentCategory = parentCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("positive")
    public Boolean positive;
    public Sentiment withPositive(Boolean positive) {
        this.positive = positive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scale")
    public Double scale;
    public Sentiment withScale(Double scale) {
        this.scale = scale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Integer start;
    public Sentiment withStart(Integer start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public Sentiment withText(String text) {
        this.text = text;
        return this;
    }
}
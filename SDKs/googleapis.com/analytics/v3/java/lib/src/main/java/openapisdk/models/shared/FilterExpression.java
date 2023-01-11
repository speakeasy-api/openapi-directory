package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FilterExpression
 * JSON template for an Analytics filter expression.
**/
public class FilterExpression {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseSensitive")
    public Boolean caseSensitive;
    public FilterExpression withCaseSensitive(Boolean caseSensitive) {
        this.caseSensitive = caseSensitive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expressionValue")
    public String expressionValue;
    public FilterExpression withExpressionValue(String expressionValue) {
        this.expressionValue = expressionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public FilterExpression withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldIndex")
    public Integer fieldIndex;
    public FilterExpression withFieldIndex(Integer fieldIndex) {
        this.fieldIndex = fieldIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public FilterExpression withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchType")
    public String matchType;
    public FilterExpression withMatchType(String matchType) {
        this.matchType = matchType;
        return this;
    }
}
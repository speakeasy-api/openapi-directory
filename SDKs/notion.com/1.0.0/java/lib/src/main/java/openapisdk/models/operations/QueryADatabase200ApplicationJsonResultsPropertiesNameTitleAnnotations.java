package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bold")
    public Boolean bold;
    public QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations withBold(Boolean bold) {
        this.bold = bold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Boolean code;
    public QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations withCode(Boolean code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("italic")
    public Boolean italic;
    public QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations withItalic(Boolean italic) {
        this.italic = italic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strikethrough")
    public Boolean strikethrough;
    public QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations withStrikethrough(Boolean strikethrough) {
        this.strikethrough = strikethrough;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("underline")
    public Boolean underline;
    public QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations withUnderline(Boolean underline) {
        this.underline = underline;
        return this;
    }
}
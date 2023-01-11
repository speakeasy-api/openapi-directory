package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bold")
    public Boolean bold;
    public RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations withBold(Boolean bold) {
        this.bold = bold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Boolean code;
    public RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations withCode(Boolean code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("italic")
    public Boolean italic;
    public RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations withItalic(Boolean italic) {
        this.italic = italic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strikethrough")
    public Boolean strikethrough;
    public RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations withStrikethrough(Boolean strikethrough) {
        this.strikethrough = strikethrough;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("underline")
    public Boolean underline;
    public RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations withUnderline(Boolean underline) {
        this.underline = underline;
        return this;
    }
}
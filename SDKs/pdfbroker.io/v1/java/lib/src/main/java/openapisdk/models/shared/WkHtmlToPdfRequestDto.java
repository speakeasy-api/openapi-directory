package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WkHtmlToPdfRequestDto
 * WkHtmlToPdfRequestDto is the data transfer object for generating a pdf using wkhtmltopdf;
**/
public class WkHtmlToPdfRequestDto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HtmlBase64String")
    public String htmlBase64String;
    public WkHtmlToPdfRequestDto withHtmlBase64String(String htmlBase64String) {
        this.htmlBase64String = htmlBase64String;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Resources")
    public java.util.Map<String, String> resources;
    public WkHtmlToPdfRequestDto withResources(java.util.Map<String, String> resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Url")
    public String url;
    public WkHtmlToPdfRequestDto withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WkHtmlToPdfArguments")
    public java.util.Map<String, String> wkHtmlToPdfArguments;
    public WkHtmlToPdfRequestDto withWkHtmlToPdfArguments(java.util.Map<String, String> wkHtmlToPdfArguments) {
        this.wkHtmlToPdfArguments = wkHtmlToPdfArguments;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomPage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public CustomPage withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hidden")
    public Boolean hidden;
    public CustomPage withHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html")
    public String html;
    public CustomPage withHtml(String html) {
        this.html = html;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlmode")
    public Boolean htmlmode;
    public CustomPage withHtmlmode(Boolean htmlmode) {
        this.htmlmode = htmlmode;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public CustomPage withTitle(String title) {
        this.title = title;
        return this;
    }
}
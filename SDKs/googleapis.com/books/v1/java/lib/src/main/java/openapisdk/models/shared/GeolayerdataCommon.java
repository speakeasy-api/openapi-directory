package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GeolayerdataCommon {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lang")
    public String lang;
    public GeolayerdataCommon withLang(String lang) {
        this.lang = lang;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previewImageUrl")
    public String previewImageUrl;
    public GeolayerdataCommon withPreviewImageUrl(String previewImageUrl) {
        this.previewImageUrl = previewImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snippet")
    public String snippet;
    public GeolayerdataCommon withSnippet(String snippet) {
        this.snippet = snippet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snippetUrl")
    public String snippetUrl;
    public GeolayerdataCommon withSnippetUrl(String snippetUrl) {
        this.snippetUrl = snippetUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GeolayerdataCommon withTitle(String title) {
        this.title = title;
        return this;
    }
}
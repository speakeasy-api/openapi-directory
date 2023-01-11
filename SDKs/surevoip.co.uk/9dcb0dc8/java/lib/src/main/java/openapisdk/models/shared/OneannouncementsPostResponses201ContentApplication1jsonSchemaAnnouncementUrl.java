package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementUrl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public String download;
    public OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementUrl withDownload(String download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementUrl withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementUrl withTitle(String title) {
        this.title = title;
        return this;
    }
}
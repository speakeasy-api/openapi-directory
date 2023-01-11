package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAnnouncements201ApplicationJsonAnnouncementUrl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public String download;
    public PostAnnouncements201ApplicationJsonAnnouncementUrl withDownload(String download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public PostAnnouncements201ApplicationJsonAnnouncementUrl withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public PostAnnouncements201ApplicationJsonAnnouncementUrl withTitle(String title) {
        this.title = title;
        return this;
    }
}
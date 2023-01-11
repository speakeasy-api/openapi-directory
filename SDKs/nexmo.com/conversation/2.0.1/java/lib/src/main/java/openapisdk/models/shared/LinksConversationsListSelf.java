package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LinksConversationsListSelf {
    @JsonProperty("href")
    public String href;
    public LinksConversationsListSelf withHref(String href) {
        this.href = href;
        return this;
    }
}
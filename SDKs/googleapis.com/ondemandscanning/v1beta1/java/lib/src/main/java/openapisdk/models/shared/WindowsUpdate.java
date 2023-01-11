package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WindowsUpdate
 * Windows Update represents the metadata about the update for the Windows operating system. The fields in this message come from the Windows Update API documented at https://docs.microsoft.com/en-us/windows/win32/api/wuapi/nn-wuapi-iupdate.
**/
public class WindowsUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public Category[] categories;
    public WindowsUpdate withCategories(Category[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WindowsUpdate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public Identity identity;
    public WindowsUpdate withIdentity(Identity identity) {
        this.identity = identity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kbArticleIds")
    public String[] kbArticleIds;
    public WindowsUpdate withKbArticleIds(String[] kbArticleIds) {
        this.kbArticleIds = kbArticleIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastPublishedTimestamp")
    public String lastPublishedTimestamp;
    public WindowsUpdate withLastPublishedTimestamp(String lastPublishedTimestamp) {
        this.lastPublishedTimestamp = lastPublishedTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportUrl")
    public String supportUrl;
    public WindowsUpdate withSupportUrl(String supportUrl) {
        this.supportUrl = supportUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public WindowsUpdate withTitle(String title) {
        this.title = title;
        return this;
    }
}
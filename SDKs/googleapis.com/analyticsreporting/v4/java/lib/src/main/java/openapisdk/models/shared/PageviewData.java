package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PageviewData
 * Represents details collected when the visitor views a page.
**/
public class PageviewData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagePath")
    public String pagePath;
    public PageviewData withPagePath(String pagePath) {
        this.pagePath = pagePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageTitle")
    public String pageTitle;
    public PageviewData withPageTitle(String pageTitle) {
        this.pageTitle = pageTitle;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Images200ApplicationJsonImageResultsLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public Images200ApplicationJsonImageResultsLink withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public Images200ApplicationJsonImageResultsLink withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Images200ApplicationJsonImageResultsLink withTitle(String title) {
        this.title = title;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PaginationLinksPrev {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public PaginationLinksPrev withHref(String href) {
        this.href = href;
        return this;
    }
}
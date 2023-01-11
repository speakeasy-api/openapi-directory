package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAndSearchMediaItems200ApplicationJsonLinksSelf {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public ListAndSearchMediaItems200ApplicationJsonLinksSelf withHref(String href) {
        this.href = href;
        return this;
    }
}
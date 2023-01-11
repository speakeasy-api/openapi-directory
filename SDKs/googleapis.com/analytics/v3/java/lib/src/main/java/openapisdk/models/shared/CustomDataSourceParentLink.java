package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomDataSourceParentLink
 * Parent link for this custom data source. Points to the web property to which this custom data source belongs.
**/
public class CustomDataSourceParentLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public CustomDataSourceParentLink withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public CustomDataSourceParentLink withType(String type) {
        this.type = type;
        return this;
    }
}
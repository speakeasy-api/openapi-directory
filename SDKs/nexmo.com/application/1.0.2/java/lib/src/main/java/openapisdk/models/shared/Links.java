package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Links
 * A series of links between resources in this API in the following [HAL specification](http://stateless.co/hal_specification.html).
**/
public class Links {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public Links withHref(String href) {
        this.href = href;
        return this;
    }
}
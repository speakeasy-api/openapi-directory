package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListMeta
 * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
**/
public class ListMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("continue")
    public String continue_;
    public ListMeta withContinue(String continue_) {
        this.continue_ = continue_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceVersion")
    public String resourceVersion;
    public ListMeta withResourceVersion(String resourceVersion) {
        this.resourceVersion = resourceVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public ListMeta withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
}
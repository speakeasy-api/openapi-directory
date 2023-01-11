package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFactcheckingFactchecktoolsV1alpha1Publisher
 * Information about the publisher.
**/
public class GoogleFactcheckingFactchecktoolsV1alpha1Publisher {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleFactcheckingFactchecktoolsV1alpha1Publisher withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public String site;
    public GoogleFactcheckingFactchecktoolsV1alpha1Publisher withSite(String site) {
        this.site = site;
        return this;
    }
}
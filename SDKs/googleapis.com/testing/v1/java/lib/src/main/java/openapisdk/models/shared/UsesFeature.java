package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UsesFeature
 * A tag within a manifest. https://developer.android.com/guide/topics/manifest/uses-feature-element.html
**/
public class UsesFeature {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isRequired")
    public Boolean isRequired;
    public UsesFeature withIsRequired(Boolean isRequired) {
        this.isRequired = isRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UsesFeature withName(String name) {
        this.name = name;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * V2Model
 * Options for the V2 model.
**/
public class V2Model {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentCategoriesVersion")
    public V2ModelContentCategoriesVersionEnum contentCategoriesVersion;
    public V2Model withContentCategoriesVersion(V2ModelContentCategoriesVersionEnum contentCategoriesVersion) {
        this.contentCategoriesVersion = contentCategoriesVersion;
        return this;
    }
}
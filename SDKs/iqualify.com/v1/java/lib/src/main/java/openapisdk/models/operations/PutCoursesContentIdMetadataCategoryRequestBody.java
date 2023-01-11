package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutCoursesContentIdMetadataCategoryRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public PutCoursesContentIdMetadataCategoryRequestBody withCategory(String category) {
        this.category = category;
        return this;
    }
}
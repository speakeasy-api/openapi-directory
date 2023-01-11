package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutCoursesContentIdMetadataLevelRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public String level;
    public PutCoursesContentIdMetadataLevelRequestBody withLevel(String level) {
        this.level = level;
        return this;
    }
}
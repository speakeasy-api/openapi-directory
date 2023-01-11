package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Copy
 * An object was created by copying an existing object.
**/
public class Copy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalObject")
    public TargetReference originalObject;
    public Copy withOriginalObject(TargetReference originalObject) {
        this.originalObject = originalObject;
        return this;
    }
}
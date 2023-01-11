package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Create
 * An object was created.
**/
public class Create {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copy")
    public Copy copy;
    public Create withCopy(Copy copy) {
        this.copy = copy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new")
    public java.util.Map<String, Object> new_;
    public Create withNew(java.util.Map<String, Object> new_) {
        this.new_ = new_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upload")
    public java.util.Map<String, Object> upload;
    public Create withUpload(java.util.Map<String, Object> upload) {
        this.upload = upload;
        return this;
    }
}
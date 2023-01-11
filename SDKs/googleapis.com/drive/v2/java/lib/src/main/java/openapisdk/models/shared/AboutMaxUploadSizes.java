package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AboutMaxUploadSizes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public AboutMaxUploadSizes withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AboutMaxUploadSizes withType(String type) {
        this.type = type;
        return this;
    }
}
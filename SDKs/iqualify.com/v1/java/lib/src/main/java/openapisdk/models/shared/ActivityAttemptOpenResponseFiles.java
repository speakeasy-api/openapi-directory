package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActivityAttemptOpenResponseFiles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filename")
    public String filename;
    public ActivityAttemptOpenResponseFiles withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimetype")
    public String mimetype;
    public ActivityAttemptOpenResponseFiles withMimetype(String mimetype) {
        this.mimetype = mimetype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public ActivityAttemptOpenResponseFiles withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ActivityAttemptOpenResponseFiles withUrl(String url) {
        this.url = url;
        return this;
    }
}
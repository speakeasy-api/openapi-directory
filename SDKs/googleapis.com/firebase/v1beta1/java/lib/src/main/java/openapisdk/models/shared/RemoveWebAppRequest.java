package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveWebAppRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowMissing")
    public Boolean allowMissing;
    public RemoveWebAppRequest withAllowMissing(Boolean allowMissing) {
        this.allowMissing = allowMissing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public RemoveWebAppRequest withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("immediate")
    public Boolean immediate;
    public RemoveWebAppRequest withImmediate(Boolean immediate) {
        this.immediate = immediate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validateOnly")
    public Boolean validateOnly;
    public RemoveWebAppRequest withValidateOnly(Boolean validateOnly) {
        this.validateOnly = validateOnly;
        return this;
    }
}
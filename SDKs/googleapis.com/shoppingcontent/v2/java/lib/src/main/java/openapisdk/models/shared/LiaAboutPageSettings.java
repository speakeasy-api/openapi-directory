package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiaAboutPageSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public LiaAboutPageSettings withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public LiaAboutPageSettings withUrl(String url) {
        this.url = url;
        return this;
    }
}
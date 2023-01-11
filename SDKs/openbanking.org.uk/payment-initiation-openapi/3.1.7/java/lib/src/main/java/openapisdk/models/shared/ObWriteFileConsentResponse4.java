package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteFileConsentResponse4 {
    @JsonProperty("Data")
    public ObWriteFileConsentResponse4Data data;
    public ObWriteFileConsentResponse4 withData(ObWriteFileConsentResponse4Data data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public Links links;
    public ObWriteFileConsentResponse4 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public Meta meta;
    public ObWriteFileConsentResponse4 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
}
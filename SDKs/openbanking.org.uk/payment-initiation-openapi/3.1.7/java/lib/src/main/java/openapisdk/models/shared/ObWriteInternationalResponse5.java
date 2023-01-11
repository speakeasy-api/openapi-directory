package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteInternationalResponse5 {
    @JsonProperty("Data")
    public ObWriteInternationalResponse5Data data;
    public ObWriteInternationalResponse5 withData(ObWriteInternationalResponse5Data data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public Links links;
    public ObWriteInternationalResponse5 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public Meta meta;
    public ObWriteInternationalResponse5 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
}
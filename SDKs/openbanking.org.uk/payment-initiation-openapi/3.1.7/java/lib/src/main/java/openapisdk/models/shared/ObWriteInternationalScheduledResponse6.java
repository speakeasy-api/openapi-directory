package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteInternationalScheduledResponse6 {
    @JsonProperty("Data")
    public ObWriteInternationalScheduledResponse6Data data;
    public ObWriteInternationalScheduledResponse6 withData(ObWriteInternationalScheduledResponse6Data data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public Links links;
    public ObWriteInternationalScheduledResponse6 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public Meta meta;
    public ObWriteInternationalScheduledResponse6 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
}
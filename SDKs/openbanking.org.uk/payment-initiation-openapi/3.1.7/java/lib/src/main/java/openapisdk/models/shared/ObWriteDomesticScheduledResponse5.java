package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteDomesticScheduledResponse5 {
    @JsonProperty("Data")
    public ObWriteDomesticScheduledResponse5Data data;
    public ObWriteDomesticScheduledResponse5 withData(ObWriteDomesticScheduledResponse5Data data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public Links links;
    public ObWriteDomesticScheduledResponse5 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public Meta meta;
    public ObWriteDomesticScheduledResponse5 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
}
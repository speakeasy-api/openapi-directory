package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteDomesticResponse5 {
    @JsonProperty("Data")
    public ObWriteDomesticResponse5Data data;
    public ObWriteDomesticResponse5 withData(ObWriteDomesticResponse5Data data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public Links links;
    public ObWriteDomesticResponse5 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public Meta meta;
    public ObWriteDomesticResponse5 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
}
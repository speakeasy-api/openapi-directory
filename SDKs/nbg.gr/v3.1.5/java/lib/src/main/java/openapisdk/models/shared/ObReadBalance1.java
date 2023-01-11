package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObReadBalance1 {
    @JsonProperty("Data")
    public ObReadDataBalance1 data;
    public ObReadBalance1 withData(ObReadDataBalance1 data) {
        this.data = data;
        return this;
    }
    @JsonProperty("Links")
    public Links links;
    public ObReadBalance1 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonProperty("Meta")
    public Meta meta;
    public ObReadBalance1 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
}
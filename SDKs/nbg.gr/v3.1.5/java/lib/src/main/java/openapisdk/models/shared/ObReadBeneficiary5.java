package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObReadBeneficiary5 {
    @JsonProperty("Data")
    public ObReadDataBeneficiary5 data;
    public ObReadBeneficiary5 withData(ObReadDataBeneficiary5 data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public Links links;
    public ObReadBeneficiary5 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public Meta meta;
    public ObReadBeneficiary5 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
}
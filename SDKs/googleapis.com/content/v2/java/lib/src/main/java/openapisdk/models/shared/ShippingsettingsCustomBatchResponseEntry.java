package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShippingsettingsCustomBatchResponseEntry
 * A batch entry encoding a single non-batch shipping settings response.
**/
public class ShippingsettingsCustomBatchResponseEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchId")
    public Long batchId;
    public ShippingsettingsCustomBatchResponseEntry withBatchId(Long batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Errors errors;
    public ShippingsettingsCustomBatchResponseEntry withErrors(Errors errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ShippingsettingsCustomBatchResponseEntry withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingSettings")
    public ShippingSettings shippingSettings;
    public ShippingsettingsCustomBatchResponseEntry withShippingSettings(ShippingSettings shippingSettings) {
        this.shippingSettings = shippingSettings;
        return this;
    }
}
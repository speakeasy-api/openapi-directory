package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaxRate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default")
    public Boolean default_;
    public TaxRate withDefault(Boolean default_) {
        this.default_ = default_;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public TaxRate withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentage")
    public Double percentage;
    public TaxRate withPercentage(Double percentage) {
        this.percentage = percentage;
        return this;
    }
    @JsonProperty("uuid")
    public String uuid;
    public TaxRate withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}
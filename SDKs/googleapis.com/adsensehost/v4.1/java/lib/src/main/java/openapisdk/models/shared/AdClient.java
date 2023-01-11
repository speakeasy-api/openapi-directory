package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AdClient {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arcOptIn")
    public Boolean arcOptIn;
    public AdClient withArcOptIn(Boolean arcOptIn) {
        this.arcOptIn = arcOptIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AdClient withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AdClient withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCode")
    public String productCode;
    public AdClient withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportsReporting")
    public Boolean supportsReporting;
    public AdClient withSupportsReporting(Boolean supportsReporting) {
        this.supportsReporting = supportsReporting;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VendorWordStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approved")
    public Long approved;
    public VendorWordStats withApproved(Long approved) {
        this.approved = approved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translated")
    public Long translated;
    public VendorWordStats withTranslated(Long translated) {
        this.translated = translated;
        return this;
    }
}
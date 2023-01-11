package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdBlockingRecoveryTag
 * Representation of an ad blocking recovery tag. See https://support.google.com/adsense/answer/11575177.
**/
public class AdBlockingRecoveryTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorProtectionCode")
    public String errorProtectionCode;
    public AdBlockingRecoveryTag withErrorProtectionCode(String errorProtectionCode) {
        this.errorProtectionCode = errorProtectionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public AdBlockingRecoveryTag withTag(String tag) {
        this.tag = tag;
        return this;
    }
}
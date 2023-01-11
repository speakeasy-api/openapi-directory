package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConversionsBatchUpdateRequest
 * Update Conversions Request.
**/
public class ConversionsBatchUpdateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversions")
    public Conversion[] conversions;
    public ConversionsBatchUpdateRequest withConversions(Conversion[] conversions) {
        this.conversions = conversions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionInfo")
    public EncryptionInfo encryptionInfo;
    public ConversionsBatchUpdateRequest withEncryptionInfo(EncryptionInfo encryptionInfo) {
        this.encryptionInfo = encryptionInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ConversionsBatchUpdateRequest withKind(String kind) {
        this.kind = kind;
        return this;
    }
}
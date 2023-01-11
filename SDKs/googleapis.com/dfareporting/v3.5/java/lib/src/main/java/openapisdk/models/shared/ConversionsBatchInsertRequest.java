package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConversionsBatchInsertRequest
 * Insert Conversions Request.
**/
public class ConversionsBatchInsertRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversions")
    public Conversion[] conversions;
    public ConversionsBatchInsertRequest withConversions(Conversion[] conversions) {
        this.conversions = conversions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionInfo")
    public EncryptionInfo encryptionInfo;
    public ConversionsBatchInsertRequest withEncryptionInfo(EncryptionInfo encryptionInfo) {
        this.encryptionInfo = encryptionInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ConversionsBatchInsertRequest withKind(String kind) {
        this.kind = kind;
        return this;
    }
}
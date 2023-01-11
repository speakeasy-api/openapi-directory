package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KeyUsage
 * A KeyUsage describes key usage values that may appear in an X.509 certificate.
**/
public class KeyUsage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseKeyUsage")
    public KeyUsageOptions baseKeyUsage;
    public KeyUsage withBaseKeyUsage(KeyUsageOptions baseKeyUsage) {
        this.baseKeyUsage = baseKeyUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extendedKeyUsage")
    public ExtendedKeyUsageOptions extendedKeyUsage;
    public KeyUsage withExtendedKeyUsage(ExtendedKeyUsageOptions extendedKeyUsage) {
        this.extendedKeyUsage = extendedKeyUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unknownExtendedKeyUsages")
    public ObjectId[] unknownExtendedKeyUsages;
    public KeyUsage withUnknownExtendedKeyUsages(ObjectId[] unknownExtendedKeyUsages) {
        this.unknownExtendedKeyUsages = unknownExtendedKeyUsages;
        return this;
    }
}
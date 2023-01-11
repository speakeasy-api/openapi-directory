package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RsaKeyType
 * Describes an RSA key that may be used in a Certificate issued from a CaPool.
**/
public class RsaKeyType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxModulusSize")
    public String maxModulusSize;
    public RsaKeyType withMaxModulusSize(String maxModulusSize) {
        this.maxModulusSize = maxModulusSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minModulusSize")
    public String minModulusSize;
    public RsaKeyType withMinModulusSize(String minModulusSize) {
        this.minModulusSize = minModulusSize;
        return this;
    }
}
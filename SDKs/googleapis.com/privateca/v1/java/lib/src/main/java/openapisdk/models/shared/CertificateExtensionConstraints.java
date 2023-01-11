package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateExtensionConstraints
 * Describes a set of X.509 extensions that may be part of some certificate issuance controls.
**/
public class CertificateExtensionConstraints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalExtensions")
    public ObjectId[] additionalExtensions;
    public CertificateExtensionConstraints withAdditionalExtensions(ObjectId[] additionalExtensions) {
        this.additionalExtensions = additionalExtensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("knownExtensions")
    public CertificateExtensionConstraintsKnownExtensionsEnum[] knownExtensions;
    public CertificateExtensionConstraints withKnownExtensions(CertificateExtensionConstraintsKnownExtensionsEnum[] knownExtensions) {
        this.knownExtensions = knownExtensions;
        return this;
    }
}
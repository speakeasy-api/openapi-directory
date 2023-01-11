package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EkmConnectionInput
 * An EkmConnection represents an individual EKM connection. It can be used for creating CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC, as well as performing cryptographic operations using keys created within the EkmConnection.
**/
public class EkmConnectionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public EkmConnectionInput withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceResolvers")
    public ServiceResolverInput[] serviceResolvers;
    public EkmConnectionInput withServiceResolvers(ServiceResolverInput[] serviceResolvers) {
        this.serviceResolvers = serviceResolvers;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SamlSpConfig
 * SAML SP (service provider) configuration.
**/
public class SamlSpConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assertionConsumerServiceUri")
    public String assertionConsumerServiceUri;
    public SamlSpConfig withAssertionConsumerServiceUri(String assertionConsumerServiceUri) {
        this.assertionConsumerServiceUri = assertionConsumerServiceUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityId")
    public String entityId;
    public SamlSpConfig withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Saml
 * Represents an SAML 2.0 identity provider.
**/
public class Saml {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idpMetadataXml")
    public String idpMetadataXml;
    public Saml withIdpMetadataXml(String idpMetadataXml) {
        this.idpMetadataXml = idpMetadataXml;
        return this;
    }
}
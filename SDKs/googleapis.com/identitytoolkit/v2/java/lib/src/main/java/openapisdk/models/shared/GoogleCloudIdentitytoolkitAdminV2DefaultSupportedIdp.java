package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp
 * Standard Identity Toolkit-trusted IDPs.
**/
public class GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idpId")
    public String idpId;
    public GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp withIdpId(String idpId) {
        this.idpId = idpId;
        return this;
    }
}
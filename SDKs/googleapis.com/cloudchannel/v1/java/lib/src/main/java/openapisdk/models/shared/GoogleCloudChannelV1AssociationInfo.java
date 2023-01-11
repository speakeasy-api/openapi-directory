package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1AssociationInfo
 * Association links that an entitlement has to other entitlements.
**/
public class GoogleCloudChannelV1AssociationInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseEntitlement")
    public String baseEntitlement;
    public GoogleCloudChannelV1AssociationInfo withBaseEntitlement(String baseEntitlement) {
        this.baseEntitlement = baseEntitlement;
        return this;
    }
}
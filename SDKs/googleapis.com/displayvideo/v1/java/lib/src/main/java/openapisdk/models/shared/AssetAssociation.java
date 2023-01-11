package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetAssociation
 * Asset association for the creative.
**/
public class AssetAssociation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset")
    public Asset asset;
    public AssetAssociation withAsset(Asset asset) {
        this.asset = asset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public AssetAssociationRoleEnum role;
    public AssetAssociation withRole(AssetAssociationRoleEnum role) {
        this.role = role;
        return this;
    }
}
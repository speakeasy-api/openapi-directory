package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTokenMetadataResponseMetadataOfIssuanceData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetTokenMetadataResponseMetadataOfIssuanceData withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuer")
    public String issuer;
    public GetTokenMetadataResponseMetadataOfIssuanceData withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenName")
    public String tokenName;
    public GetTokenMetadataResponseMetadataOfIssuanceData withTokenName(String tokenName) {
        this.tokenName = tokenName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userData")
    public GetTokenMetadataResponseMetadataOfIssuanceDataUserData userData;
    public GetTokenMetadataResponseMetadataOfIssuanceData withUserData(GetTokenMetadataResponseMetadataOfIssuanceDataUserData userData) {
        this.userData = userData;
        return this;
    }
}
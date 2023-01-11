package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetTokenMetadataResponseMetadataOfIssuance
 * Metadata set at issuance
**/
public class GetTokenMetadataResponseMetadataOfIssuance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public GetTokenMetadataResponseMetadataOfIssuanceData data;
    public GetTokenMetadataResponseMetadataOfIssuance withData(GetTokenMetadataResponseMetadataOfIssuanceData data) {
        this.data = data;
        return this;
    }
}
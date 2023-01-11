package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetTokenMetadataResponseMetadataOfIssuanceDataUserData
 * Metadata set by user on token
**/
public class GetTokenMetadataResponseMetadataOfIssuanceDataUserData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta[] meta;
    public GetTokenMetadataResponseMetadataOfIssuanceDataUserData withMeta(GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta[] meta) {
        this.meta = meta;
        return this;
    }
}
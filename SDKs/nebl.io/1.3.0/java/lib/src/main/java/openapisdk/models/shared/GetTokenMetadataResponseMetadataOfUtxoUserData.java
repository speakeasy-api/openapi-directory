package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetTokenMetadataResponseMetadataOfUtxoUserData
 * Metadata set by user on token for UTXO
**/
public class GetTokenMetadataResponseMetadataOfUtxoUserData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public java.util.Map<String, Object>[] meta;
    public GetTokenMetadataResponseMetadataOfUtxoUserData withMeta(java.util.Map<String, Object>[] meta) {
        this.meta = meta;
        return this;
    }
}
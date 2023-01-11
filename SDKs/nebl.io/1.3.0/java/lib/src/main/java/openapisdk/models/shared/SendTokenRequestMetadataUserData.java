package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendTokenRequestMetadataUserData
 * Metadata set by user on token
**/
public class SendTokenRequestMetadataUserData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public SendTokenRequestMetadataUserDataMeta[] meta;
    public SendTokenRequestMetadataUserData withMeta(SendTokenRequestMetadataUserDataMeta[] meta) {
        this.meta = meta;
        return this;
    }
}
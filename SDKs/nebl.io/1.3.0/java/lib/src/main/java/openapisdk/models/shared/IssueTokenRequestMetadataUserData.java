package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IssueTokenRequestMetadataUserData
 * Metadata set by user on token
**/
public class IssueTokenRequestMetadataUserData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public IssueTokenRequestMetadataUserDataMeta[] meta;
    public IssueTokenRequestMetadataUserData withMeta(IssueTokenRequestMetadataUserDataMeta[] meta) {
        this.meta = meta;
        return this;
    }
}
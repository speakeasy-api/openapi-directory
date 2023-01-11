package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2ListInfoTypesResponse
 * Response to the ListInfoTypes request.
**/
public class GooglePrivacyDlpV2ListInfoTypesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infoTypes")
    public GooglePrivacyDlpV2InfoTypeDescription[] infoTypes;
    public GooglePrivacyDlpV2ListInfoTypesResponse withInfoTypes(GooglePrivacyDlpV2InfoTypeDescription[] infoTypes) {
        this.infoTypes = infoTypes;
        return this;
    }
}
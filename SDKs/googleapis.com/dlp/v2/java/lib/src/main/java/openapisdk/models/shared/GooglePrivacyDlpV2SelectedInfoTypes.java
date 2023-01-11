package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2SelectedInfoTypes
 * Apply transformation to the selected info_types.
**/
public class GooglePrivacyDlpV2SelectedInfoTypes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infoTypes")
    public GooglePrivacyDlpV2InfoType[] infoTypes;
    public GooglePrivacyDlpV2SelectedInfoTypes withInfoTypes(GooglePrivacyDlpV2InfoType[] infoTypes) {
        this.infoTypes = infoTypes;
        return this;
    }
}
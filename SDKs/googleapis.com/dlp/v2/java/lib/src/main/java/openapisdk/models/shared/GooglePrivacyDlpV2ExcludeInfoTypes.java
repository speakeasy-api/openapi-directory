package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2ExcludeInfoTypes
 * List of excluded infoTypes.
**/
public class GooglePrivacyDlpV2ExcludeInfoTypes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infoTypes")
    public GooglePrivacyDlpV2InfoType[] infoTypes;
    public GooglePrivacyDlpV2ExcludeInfoTypes withInfoTypes(GooglePrivacyDlpV2InfoType[] infoTypes) {
        this.infoTypes = infoTypes;
        return this;
    }
}
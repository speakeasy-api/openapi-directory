package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2KAnonymityConfig
 * k-anonymity metric, used for analysis of reidentification risk.
**/
public class GooglePrivacyDlpV2KAnonymityConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityId")
    public GooglePrivacyDlpV2EntityId entityId;
    public GooglePrivacyDlpV2KAnonymityConfig withEntityId(GooglePrivacyDlpV2EntityId entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quasiIds")
    public GooglePrivacyDlpV2FieldId[] quasiIds;
    public GooglePrivacyDlpV2KAnonymityConfig withQuasiIds(GooglePrivacyDlpV2FieldId[] quasiIds) {
        this.quasiIds = quasiIds;
        return this;
    }
}
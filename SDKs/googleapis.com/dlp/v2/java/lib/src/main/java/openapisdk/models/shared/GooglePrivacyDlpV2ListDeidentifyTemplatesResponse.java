package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
 * Response message for ListDeidentifyTemplates.
**/
public class GooglePrivacyDlpV2ListDeidentifyTemplatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deidentifyTemplates")
    public GooglePrivacyDlpV2DeidentifyTemplate[] deidentifyTemplates;
    public GooglePrivacyDlpV2ListDeidentifyTemplatesResponse withDeidentifyTemplates(GooglePrivacyDlpV2DeidentifyTemplate[] deidentifyTemplates) {
        this.deidentifyTemplates = deidentifyTemplates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GooglePrivacyDlpV2ListDeidentifyTemplatesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}
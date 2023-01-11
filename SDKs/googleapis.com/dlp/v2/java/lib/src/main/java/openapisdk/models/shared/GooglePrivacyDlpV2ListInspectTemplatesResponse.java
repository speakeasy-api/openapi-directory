package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2ListInspectTemplatesResponse
 * Response message for ListInspectTemplates.
**/
public class GooglePrivacyDlpV2ListInspectTemplatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inspectTemplates")
    public GooglePrivacyDlpV2InspectTemplate[] inspectTemplates;
    public GooglePrivacyDlpV2ListInspectTemplatesResponse withInspectTemplates(GooglePrivacyDlpV2InspectTemplate[] inspectTemplates) {
        this.inspectTemplates = inspectTemplates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GooglePrivacyDlpV2ListInspectTemplatesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}
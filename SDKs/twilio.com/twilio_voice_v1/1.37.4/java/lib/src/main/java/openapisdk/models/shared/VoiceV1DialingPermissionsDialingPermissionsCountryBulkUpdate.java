package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update_count")
    public Long updateCount;
    public VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate withUpdateCount(Long updateCount) {
        this.updateCount = updateCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update_request")
    public String updateRequest;
    public VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate withUpdateRequest(String updateRequest) {
        this.updateRequest = updateRequest;
        return this;
    }
}
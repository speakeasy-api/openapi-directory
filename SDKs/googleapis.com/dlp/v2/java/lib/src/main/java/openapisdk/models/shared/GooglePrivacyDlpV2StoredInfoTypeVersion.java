package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2StoredInfoTypeVersion
 * Version of a StoredInfoType, including the configuration used to build it, create timestamp, and current state.
**/
public class GooglePrivacyDlpV2StoredInfoTypeVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public GooglePrivacyDlpV2StoredInfoTypeConfig config;
    public GooglePrivacyDlpV2StoredInfoTypeVersion withConfig(GooglePrivacyDlpV2StoredInfoTypeConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GooglePrivacyDlpV2StoredInfoTypeVersion withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public GooglePrivacyDlpV2Error[] errors;
    public GooglePrivacyDlpV2StoredInfoTypeVersion withErrors(GooglePrivacyDlpV2Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum state;
    public GooglePrivacyDlpV2StoredInfoTypeVersion withState(GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stats")
    public GooglePrivacyDlpV2StoredInfoTypeStats stats;
    public GooglePrivacyDlpV2StoredInfoTypeVersion withStats(GooglePrivacyDlpV2StoredInfoTypeStats stats) {
        this.stats = stats;
        return this;
    }
}
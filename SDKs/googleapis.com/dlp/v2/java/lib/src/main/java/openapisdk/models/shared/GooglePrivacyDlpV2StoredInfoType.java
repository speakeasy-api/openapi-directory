package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2StoredInfoType
 * StoredInfoType resource message that contains information about the current version and any pending updates.
**/
public class GooglePrivacyDlpV2StoredInfoType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentVersion")
    public GooglePrivacyDlpV2StoredInfoTypeVersion currentVersion;
    public GooglePrivacyDlpV2StoredInfoType withCurrentVersion(GooglePrivacyDlpV2StoredInfoTypeVersion currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GooglePrivacyDlpV2StoredInfoType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pendingVersions")
    public GooglePrivacyDlpV2StoredInfoTypeVersion[] pendingVersions;
    public GooglePrivacyDlpV2StoredInfoType withPendingVersions(GooglePrivacyDlpV2StoredInfoTypeVersion[] pendingVersions) {
        this.pendingVersions = pendingVersions;
        return this;
    }
}
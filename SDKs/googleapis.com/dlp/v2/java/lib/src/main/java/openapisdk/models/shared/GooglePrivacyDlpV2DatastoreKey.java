package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2DatastoreKey
 * Record key for a finding in Cloud Datastore.
**/
public class GooglePrivacyDlpV2DatastoreKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityKey")
    public GooglePrivacyDlpV2Key entityKey;
    public GooglePrivacyDlpV2DatastoreKey withEntityKey(GooglePrivacyDlpV2Key entityKey) {
        this.entityKey = entityKey;
        return this;
    }
}
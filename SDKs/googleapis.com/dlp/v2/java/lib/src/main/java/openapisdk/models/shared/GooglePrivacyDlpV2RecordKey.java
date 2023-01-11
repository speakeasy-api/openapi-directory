package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2RecordKey
 * Message for a unique key indicating a record that contains a finding.
**/
public class GooglePrivacyDlpV2RecordKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bigQueryKey")
    public GooglePrivacyDlpV2BigQueryKey bigQueryKey;
    public GooglePrivacyDlpV2RecordKey withBigQueryKey(GooglePrivacyDlpV2BigQueryKey bigQueryKey) {
        this.bigQueryKey = bigQueryKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datastoreKey")
    public GooglePrivacyDlpV2DatastoreKey datastoreKey;
    public GooglePrivacyDlpV2RecordKey withDatastoreKey(GooglePrivacyDlpV2DatastoreKey datastoreKey) {
        this.datastoreKey = datastoreKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idValues")
    public String[] idValues;
    public GooglePrivacyDlpV2RecordKey withIdValues(String[] idValues) {
        this.idValues = idValues;
        return this;
    }
}
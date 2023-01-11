package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2RecordLocation
 * Location of a finding within a row or record.
**/
public class GooglePrivacyDlpV2RecordLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldId")
    public GooglePrivacyDlpV2FieldId fieldId;
    public GooglePrivacyDlpV2RecordLocation withFieldId(GooglePrivacyDlpV2FieldId fieldId) {
        this.fieldId = fieldId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordKey")
    public GooglePrivacyDlpV2RecordKey recordKey;
    public GooglePrivacyDlpV2RecordLocation withRecordKey(GooglePrivacyDlpV2RecordKey recordKey) {
        this.recordKey = recordKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableLocation")
    public GooglePrivacyDlpV2TableLocation tableLocation;
    public GooglePrivacyDlpV2RecordLocation withTableLocation(GooglePrivacyDlpV2TableLocation tableLocation) {
        this.tableLocation = tableLocation;
        return this;
    }
}
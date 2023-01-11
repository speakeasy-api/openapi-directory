package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2AuxiliaryTable
 * An auxiliary table contains statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable).
**/
public class GooglePrivacyDlpV2AuxiliaryTable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quasiIds")
    public GooglePrivacyDlpV2QuasiIdField[] quasiIds;
    public GooglePrivacyDlpV2AuxiliaryTable withQuasiIds(GooglePrivacyDlpV2QuasiIdField[] quasiIds) {
        this.quasiIds = quasiIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relativeFrequency")
    public GooglePrivacyDlpV2FieldId relativeFrequency;
    public GooglePrivacyDlpV2AuxiliaryTable withRelativeFrequency(GooglePrivacyDlpV2FieldId relativeFrequency) {
        this.relativeFrequency = relativeFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("table")
    public GooglePrivacyDlpV2BigQueryTable table;
    public GooglePrivacyDlpV2AuxiliaryTable withTable(GooglePrivacyDlpV2BigQueryTable table) {
        this.table = table;
        return this;
    }
}
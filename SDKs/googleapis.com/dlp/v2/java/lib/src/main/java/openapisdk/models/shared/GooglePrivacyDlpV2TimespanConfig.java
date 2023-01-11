package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2TimespanConfig
 * Configuration of the timespan of the items to include in scanning. Currently only supported when inspecting Cloud Storage and BigQuery.
**/
public class GooglePrivacyDlpV2TimespanConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableAutoPopulationOfTimespanConfig")
    public Boolean enableAutoPopulationOfTimespanConfig;
    public GooglePrivacyDlpV2TimespanConfig withEnableAutoPopulationOfTimespanConfig(Boolean enableAutoPopulationOfTimespanConfig) {
        this.enableAutoPopulationOfTimespanConfig = enableAutoPopulationOfTimespanConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public GooglePrivacyDlpV2TimespanConfig withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public GooglePrivacyDlpV2TimespanConfig withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestampField")
    public GooglePrivacyDlpV2FieldId timestampField;
    public GooglePrivacyDlpV2TimespanConfig withTimestampField(GooglePrivacyDlpV2FieldId timestampField) {
        this.timestampField = timestampField;
        return this;
    }
}
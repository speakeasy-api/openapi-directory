package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaLabelLimits
 * Label constraints governing the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.
**/
public class GoogleAppsDriveLabelsV2betaLabelLimits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldLimits")
    public GoogleAppsDriveLabelsV2betaFieldLimits fieldLimits;
    public GoogleAppsDriveLabelsV2betaLabelLimits withFieldLimits(GoogleAppsDriveLabelsV2betaFieldLimits fieldLimits) {
        this.fieldLimits = fieldLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxDeletedFields")
    public Integer maxDeletedFields;
    public GoogleAppsDriveLabelsV2betaLabelLimits withMaxDeletedFields(Integer maxDeletedFields) {
        this.maxDeletedFields = maxDeletedFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxDescriptionLength")
    public Integer maxDescriptionLength;
    public GoogleAppsDriveLabelsV2betaLabelLimits withMaxDescriptionLength(Integer maxDescriptionLength) {
        this.maxDescriptionLength = maxDescriptionLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxDraftRevisions")
    public Integer maxDraftRevisions;
    public GoogleAppsDriveLabelsV2betaLabelLimits withMaxDraftRevisions(Integer maxDraftRevisions) {
        this.maxDraftRevisions = maxDraftRevisions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxFields")
    public Integer maxFields;
    public GoogleAppsDriveLabelsV2betaLabelLimits withMaxFields(Integer maxFields) {
        this.maxFields = maxFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxTitleLength")
    public Integer maxTitleLength;
    public GoogleAppsDriveLabelsV2betaLabelLimits withMaxTitleLength(Integer maxTitleLength) {
        this.maxTitleLength = maxTitleLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleAppsDriveLabelsV2betaLabelLimits withName(String name) {
        this.name = name;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaFieldLimits
 * Field constants governing the structure of a Field; such as, the maximum title length, minimum and maximum field values or length, etc.
**/
public class GoogleAppsDriveLabelsV2betaFieldLimits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateLimits")
    public GoogleAppsDriveLabelsV2betaDateLimits dateLimits;
    public GoogleAppsDriveLabelsV2betaFieldLimits withDateLimits(GoogleAppsDriveLabelsV2betaDateLimits dateLimits) {
        this.dateLimits = dateLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integerLimits")
    public GoogleAppsDriveLabelsV2betaIntegerLimits integerLimits;
    public GoogleAppsDriveLabelsV2betaFieldLimits withIntegerLimits(GoogleAppsDriveLabelsV2betaIntegerLimits integerLimits) {
        this.integerLimits = integerLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longTextLimits")
    public GoogleAppsDriveLabelsV2betaLongTextLimits longTextLimits;
    public GoogleAppsDriveLabelsV2betaFieldLimits withLongTextLimits(GoogleAppsDriveLabelsV2betaLongTextLimits longTextLimits) {
        this.longTextLimits = longTextLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxDescriptionLength")
    public Integer maxDescriptionLength;
    public GoogleAppsDriveLabelsV2betaFieldLimits withMaxDescriptionLength(Integer maxDescriptionLength) {
        this.maxDescriptionLength = maxDescriptionLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxDisplayNameLength")
    public Integer maxDisplayNameLength;
    public GoogleAppsDriveLabelsV2betaFieldLimits withMaxDisplayNameLength(Integer maxDisplayNameLength) {
        this.maxDisplayNameLength = maxDisplayNameLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxIdLength")
    public Integer maxIdLength;
    public GoogleAppsDriveLabelsV2betaFieldLimits withMaxIdLength(Integer maxIdLength) {
        this.maxIdLength = maxIdLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectionLimits")
    public GoogleAppsDriveLabelsV2betaSelectionLimits selectionLimits;
    public GoogleAppsDriveLabelsV2betaFieldLimits withSelectionLimits(GoogleAppsDriveLabelsV2betaSelectionLimits selectionLimits) {
        this.selectionLimits = selectionLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textLimits")
    public GoogleAppsDriveLabelsV2betaTextLimits textLimits;
    public GoogleAppsDriveLabelsV2betaFieldLimits withTextLimits(GoogleAppsDriveLabelsV2betaTextLimits textLimits) {
        this.textLimits = textLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userLimits")
    public GoogleAppsDriveLabelsV2betaUserLimits userLimits;
    public GoogleAppsDriveLabelsV2betaFieldLimits withUserLimits(GoogleAppsDriveLabelsV2betaUserLimits userLimits) {
        this.userLimits = userLimits;
        return this;
    }
}
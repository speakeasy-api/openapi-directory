package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LintResult
 * Structured response of a single validation unit.
**/
public class LintResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debugMessage")
    public String debugMessage;
    public LintResult withDebugMessage(String debugMessage) {
        this.debugMessage = debugMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldName")
    public String fieldName;
    public LintResult withFieldName(String fieldName) {
        this.fieldName = fieldName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public LintResultLevelEnum level;
    public LintResult withLevel(LintResultLevelEnum level) {
        this.level = level;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationOffset")
    public Integer locationOffset;
    public LintResult withLocationOffset(Integer locationOffset) {
        this.locationOffset = locationOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public LintResultSeverityEnum severity;
    public LintResult withSeverity(LintResultSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validationUnitName")
    public String validationUnitName;
    public LintResult withValidationUnitName(String validationUnitName) {
        this.validationUnitName = validationUnitName;
        return this;
    }
}
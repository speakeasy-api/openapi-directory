package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CodeScanningAlertLocation
 * Describe a region within a file for the alert.
**/
public class CodeScanningAlertLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_column")
    public Long endColumn;
    public CodeScanningAlertLocation withEndColumn(Long endColumn) {
        this.endColumn = endColumn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_line")
    public Long endLine;
    public CodeScanningAlertLocation withEndLine(Long endLine) {
        this.endLine = endLine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public CodeScanningAlertLocation withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_column")
    public Long startColumn;
    public CodeScanningAlertLocation withStartColumn(Long startColumn) {
        this.startColumn = startColumn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_line")
    public Long startLine;
    public CodeScanningAlertLocation withStartLine(Long startLine) {
        this.startLine = startLine;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DatafeedFormat {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnDelimiter")
    public String columnDelimiter;
    public DatafeedFormat withColumnDelimiter(String columnDelimiter) {
        this.columnDelimiter = columnDelimiter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileEncoding")
    public String fileEncoding;
    public DatafeedFormat withFileEncoding(String fileEncoding) {
        this.fileEncoding = fileEncoding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quotingMode")
    public String quotingMode;
    public DatafeedFormat withQuotingMode(String quotingMode) {
        this.quotingMode = quotingMode;
        return this;
    }
}
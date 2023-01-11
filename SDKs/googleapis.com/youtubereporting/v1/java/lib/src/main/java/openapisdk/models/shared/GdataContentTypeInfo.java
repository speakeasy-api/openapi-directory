package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GdataContentTypeInfo
 * gdata
**/
public class GdataContentTypeInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bestGuess")
    public String bestGuess;
    public GdataContentTypeInfo withBestGuess(String bestGuess) {
        this.bestGuess = bestGuess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromBytes")
    public String fromBytes;
    public GdataContentTypeInfo withFromBytes(String fromBytes) {
        this.fromBytes = fromBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromFileName")
    public String fromFileName;
    public GdataContentTypeInfo withFromFileName(String fromFileName) {
        this.fromFileName = fromFileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromHeader")
    public String fromHeader;
    public GdataContentTypeInfo withFromHeader(String fromHeader) {
        this.fromHeader = fromHeader;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromUrlPath")
    public String fromUrlPath;
    public GdataContentTypeInfo withFromUrlPath(String fromUrlPath) {
        this.fromUrlPath = fromUrlPath;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContentTypeInfo
 * # gdata.* are outside protos with mising documentation
**/
public class ContentTypeInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bestGuess")
    public String bestGuess;
    public ContentTypeInfo withBestGuess(String bestGuess) {
        this.bestGuess = bestGuess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromBytes")
    public String fromBytes;
    public ContentTypeInfo withFromBytes(String fromBytes) {
        this.fromBytes = fromBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromFileName")
    public String fromFileName;
    public ContentTypeInfo withFromFileName(String fromFileName) {
        this.fromFileName = fromFileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromHeader")
    public String fromHeader;
    public ContentTypeInfo withFromHeader(String fromHeader) {
        this.fromHeader = fromHeader;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromUrlPath")
    public String fromUrlPath;
    public ContentTypeInfo withFromUrlPath(String fromUrlPath) {
        this.fromUrlPath = fromUrlPath;
        return this;
    }
}
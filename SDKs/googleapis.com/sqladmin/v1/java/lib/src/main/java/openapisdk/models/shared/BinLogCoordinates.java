package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BinLogCoordinates
 * Binary log coordinates.
**/
public class BinLogCoordinates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("binLogFileName")
    public String binLogFileName;
    public BinLogCoordinates withBinLogFileName(String binLogFileName) {
        this.binLogFileName = binLogFileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("binLogPosition")
    public String binLogPosition;
    public BinLogCoordinates withBinLogPosition(String binLogPosition) {
        this.binLogPosition = binLogPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public BinLogCoordinates withKind(String kind) {
        this.kind = kind;
        return this;
    }
}
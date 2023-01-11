package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ImportExportStats
 * Global stats for the current Otoroshi instances
**/
public class ImportExportStats {
    @JsonProperty("calls")
    public Long calls;
    public ImportExportStats withCalls(Long calls) {
        this.calls = calls;
        return this;
    }
    @JsonProperty("dataIn")
    public Long dataIn;
    public ImportExportStats withDataIn(Long dataIn) {
        this.dataIn = dataIn;
        return this;
    }
    @JsonProperty("dataOut")
    public Long dataOut;
    public ImportExportStats withDataOut(Long dataOut) {
        this.dataOut = dataOut;
        return this;
    }
}
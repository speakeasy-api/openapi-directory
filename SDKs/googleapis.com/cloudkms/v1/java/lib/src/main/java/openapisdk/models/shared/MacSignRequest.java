package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MacSignRequest
 * Request message for KeyManagementService.MacSign.
**/
public class MacSignRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public MacSignRequest withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataCrc32c")
    public String dataCrc32c;
    public MacSignRequest withDataCrc32c(String dataCrc32c) {
        this.dataCrc32c = dataCrc32c;
        return this;
    }
}
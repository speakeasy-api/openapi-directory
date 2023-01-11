package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenerateRandomBytesResponse
 * Response message for KeyManagementService.GenerateRandomBytes.
**/
public class GenerateRandomBytesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public GenerateRandomBytesResponse withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataCrc32c")
    public String dataCrc32c;
    public GenerateRandomBytesResponse withDataCrc32c(String dataCrc32c) {
        this.dataCrc32c = dataCrc32c;
        return this;
    }
}
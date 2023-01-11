package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MacVerifyRequest
 * Request message for KeyManagementService.MacVerify.
**/
public class MacVerifyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public MacVerifyRequest withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataCrc32c")
    public String dataCrc32c;
    public MacVerifyRequest withDataCrc32c(String dataCrc32c) {
        this.dataCrc32c = dataCrc32c;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac")
    public String mac;
    public MacVerifyRequest withMac(String mac) {
        this.mac = mac;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("macCrc32c")
    public String macCrc32c;
    public MacVerifyRequest withMacCrc32c(String macCrc32c) {
        this.macCrc32c = macCrc32c;
        return this;
    }
}
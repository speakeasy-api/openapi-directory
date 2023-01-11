package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AboutQuotaBytesByService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bytesUsed")
    public String bytesUsed;
    public AboutQuotaBytesByService withBytesUsed(String bytesUsed) {
        this.bytesUsed = bytesUsed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public AboutQuotaBytesByService withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}
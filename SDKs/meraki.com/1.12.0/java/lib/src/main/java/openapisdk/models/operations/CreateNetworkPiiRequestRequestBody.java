package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkPiiRequestRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasets")
    public String[] datasets;
    public CreateNetworkPiiRequestRequestBody withDatasets(String[] datasets) {
        this.datasets = datasets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public CreateNetworkPiiRequestRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac")
    public String mac;
    public CreateNetworkPiiRequestRequestBody withMac(String mac) {
        this.mac = mac;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smDeviceId")
    public String smDeviceId;
    public CreateNetworkPiiRequestRequestBody withSmDeviceId(String smDeviceId) {
        this.smDeviceId = smDeviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smUserId")
    public String smUserId;
    public CreateNetworkPiiRequestRequestBody withSmUserId(String smUserId) {
        this.smUserId = smUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CreateNetworkPiiRequestRequestBodyTypeEnum type;
    public CreateNetworkPiiRequestRequestBody withType(CreateNetworkPiiRequestRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public CreateNetworkPiiRequestRequestBody withUsername(String username) {
        this.username = username;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey
 * MD5 authentication credentials. This param is only relevant if md5AuthenticationEnabled is true
**/
public class UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passphrase")
    public String passphrase;
    public UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey withPassphrase(String passphrase) {
        this.passphrase = passphrase;
        return this;
    }
}
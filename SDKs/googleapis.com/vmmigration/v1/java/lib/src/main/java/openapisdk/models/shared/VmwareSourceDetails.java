package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VmwareSourceDetails
 * VmwareSourceDetails message describes a specific source details for the vmware source type.
**/
public class VmwareSourceDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public VmwareSourceDetails withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbprint")
    public String thumbprint;
    public VmwareSourceDetails withThumbprint(String thumbprint) {
        this.thumbprint = thumbprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public VmwareSourceDetails withUsername(String username) {
        this.username = username;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vcenterIp")
    public String vcenterIp;
    public VmwareSourceDetails withVcenterIp(String vcenterIp) {
        this.vcenterIp = vcenterIp;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VpcAccessConnector
 * VPC access connector specification.
**/
public class VpcAccessConnector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("egressSetting")
    public VpcAccessConnectorEgressSettingEnum egressSetting;
    public VpcAccessConnector withEgressSetting(VpcAccessConnectorEgressSettingEnum egressSetting) {
        this.egressSetting = egressSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public VpcAccessConnector withName(String name) {
        this.name = name;
        return this;
    }
}
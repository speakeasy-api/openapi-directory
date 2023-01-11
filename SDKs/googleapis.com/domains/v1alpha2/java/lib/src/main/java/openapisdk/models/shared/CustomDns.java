package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomDns
 * Configuration for an arbitrary DNS provider.
**/
public class CustomDns {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dsRecords")
    public DsRecord[] dsRecords;
    public CustomDns withDsRecords(DsRecord[] dsRecords) {
        this.dsRecords = dsRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nameServers")
    public String[] nameServers;
    public CustomDns withNameServers(String[] nameServers) {
        this.nameServers = nameServers;
        return this;
    }
}
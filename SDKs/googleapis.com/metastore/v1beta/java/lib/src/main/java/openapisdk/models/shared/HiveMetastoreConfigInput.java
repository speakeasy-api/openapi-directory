package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HiveMetastoreConfigInput
 * Specifies configuration information specific to running Hive metastore software as the metastore service.
**/
public class HiveMetastoreConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auxiliaryVersions")
    public java.util.Map<String, AuxiliaryVersionConfigInput> auxiliaryVersions;
    public HiveMetastoreConfigInput withAuxiliaryVersions(java.util.Map<String, AuxiliaryVersionConfigInput> auxiliaryVersions) {
        this.auxiliaryVersions = auxiliaryVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configOverrides")
    public java.util.Map<String, String> configOverrides;
    public HiveMetastoreConfigInput withConfigOverrides(java.util.Map<String, String> configOverrides) {
        this.configOverrides = configOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointProtocol")
    public HiveMetastoreConfigEndpointProtocolEnum endpointProtocol;
    public HiveMetastoreConfigInput withEndpointProtocol(HiveMetastoreConfigEndpointProtocolEnum endpointProtocol) {
        this.endpointProtocol = endpointProtocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kerberosConfig")
    public KerberosConfig kerberosConfig;
    public HiveMetastoreConfigInput withKerberosConfig(KerberosConfig kerberosConfig) {
        this.kerberosConfig = kerberosConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public HiveMetastoreConfigInput withVersion(String version) {
        this.version = version;
        return this;
    }
}
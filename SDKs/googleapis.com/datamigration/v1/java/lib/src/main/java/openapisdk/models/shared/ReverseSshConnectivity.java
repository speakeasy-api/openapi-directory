package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReverseSshConnectivity
 * The details needed to configure a reverse SSH tunnel between the source and destination databases. These details will be used when calling the generateSshScript method (see https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.migrationJobs/generateSshScript) to produce the script that will help set up the reverse SSH tunnel, and to set up the VPC peering between the Cloud SQL private network and the VPC.
**/
public class ReverseSshConnectivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vm")
    public String vm;
    public ReverseSshConnectivity withVm(String vm) {
        this.vm = vm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmIp")
    public String vmIp;
    public ReverseSshConnectivity withVmIp(String vmIp) {
        this.vmIp = vmIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmPort")
    public Integer vmPort;
    public ReverseSshConnectivity withVmPort(Integer vmPort) {
        this.vmPort = vmPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpc")
    public String vpc;
    public ReverseSshConnectivity withVpc(String vpc) {
        this.vpc = vpc;
        return this;
    }
}
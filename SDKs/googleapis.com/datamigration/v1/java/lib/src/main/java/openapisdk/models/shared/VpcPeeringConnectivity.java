package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VpcPeeringConnectivity
 * The details of the VPC where the source database is located in Google Cloud. We will use this information to set up the VPC peering connection between Cloud SQL and this VPC.
**/
public class VpcPeeringConnectivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpc")
    public String vpc;
    public VpcPeeringConnectivity withVpc(String vpc) {
        this.vpc = vpc;
        return this;
    }
}
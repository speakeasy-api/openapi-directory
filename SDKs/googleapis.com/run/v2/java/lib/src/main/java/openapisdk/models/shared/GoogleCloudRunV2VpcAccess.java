package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2VpcAccess
 * VPC Access settings. For more information on creating a VPC Connector, visit https://cloud.google.com/vpc/docs/configure-serverless-vpc-access For information on how to configure Cloud Run with an existing VPC Connector, visit https://cloud.google.com/run/docs/configuring/connecting-vpc
**/
public class GoogleCloudRunV2VpcAccess {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connector")
    public String connector;
    public GoogleCloudRunV2VpcAccess withConnector(String connector) {
        this.connector = connector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("egress")
    public GoogleCloudRunV2VpcAccessEgressEnum egress;
    public GoogleCloudRunV2VpcAccess withEgress(GoogleCloudRunV2VpcAccessEgressEnum egress) {
        this.egress = egress;
        return this;
    }
}
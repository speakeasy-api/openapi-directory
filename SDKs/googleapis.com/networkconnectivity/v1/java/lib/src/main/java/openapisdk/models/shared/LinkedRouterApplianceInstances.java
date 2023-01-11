package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinkedRouterApplianceInstances
 * A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.
**/
public class LinkedRouterApplianceInstances {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instances")
    public RouterApplianceInstance[] instances;
    public LinkedRouterApplianceInstances withInstances(RouterApplianceInstance[] instances) {
        this.instances = instances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteToSiteDataTransfer")
    public Boolean siteToSiteDataTransfer;
    public LinkedRouterApplianceInstances withSiteToSiteDataTransfer(Boolean siteToSiteDataTransfer) {
        this.siteToSiteDataTransfer = siteToSiteDataTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcNetwork")
    public String vpcNetwork;
    public LinkedRouterApplianceInstances withVpcNetwork(String vpcNetwork) {
        this.vpcNetwork = vpcNetwork;
        return this;
    }
}
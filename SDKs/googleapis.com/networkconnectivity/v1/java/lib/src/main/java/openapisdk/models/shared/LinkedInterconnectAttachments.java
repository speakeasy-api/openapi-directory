package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinkedInterconnectAttachments
 * A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
**/
public class LinkedInterconnectAttachments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteToSiteDataTransfer")
    public Boolean siteToSiteDataTransfer;
    public LinkedInterconnectAttachments withSiteToSiteDataTransfer(Boolean siteToSiteDataTransfer) {
        this.siteToSiteDataTransfer = siteToSiteDataTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uris")
    public String[] uris;
    public LinkedInterconnectAttachments withUris(String[] uris) {
        this.uris = uris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcNetwork")
    public String vpcNetwork;
    public LinkedInterconnectAttachments withVpcNetwork(String vpcNetwork) {
        this.vpcNetwork = vpcNetwork;
        return this;
    }
}
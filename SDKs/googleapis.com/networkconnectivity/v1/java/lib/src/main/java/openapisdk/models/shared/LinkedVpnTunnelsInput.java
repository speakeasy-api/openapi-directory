package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinkedVpnTunnelsInput
 * A collection of Cloud VPN tunnel resources. These resources should be redundant HA VPN tunnels that all advertise the same prefixes to Google Cloud. Alternatively, in a passive/active configuration, all tunnels should be capable of advertising the same prefixes.
**/
public class LinkedVpnTunnelsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteToSiteDataTransfer")
    public Boolean siteToSiteDataTransfer;
    public LinkedVpnTunnelsInput withSiteToSiteDataTransfer(Boolean siteToSiteDataTransfer) {
        this.siteToSiteDataTransfer = siteToSiteDataTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uris")
    public String[] uris;
    public LinkedVpnTunnelsInput withUris(String[] uris) {
        this.uris = uris;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinkedInterconnectAttachmentsInput
 * A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
**/
public class LinkedInterconnectAttachmentsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteToSiteDataTransfer")
    public Boolean siteToSiteDataTransfer;
    public LinkedInterconnectAttachmentsInput withSiteToSiteDataTransfer(Boolean siteToSiteDataTransfer) {
        this.siteToSiteDataTransfer = siteToSiteDataTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uris")
    public String[] uris;
    public LinkedInterconnectAttachmentsInput withUris(String[] uris) {
        this.uris = uris;
        return this;
    }
}
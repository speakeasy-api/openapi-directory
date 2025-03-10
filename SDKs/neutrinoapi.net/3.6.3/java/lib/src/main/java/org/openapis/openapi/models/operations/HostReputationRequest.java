/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class HostReputationRequest {
    /**
     * An IP address, domain name, FQDN or URL. &lt;br&gt;If you supply a domain/URL it will be checked against the URI DNSBL lists
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=host")
    public String host;
    public HostReputationRequest withHost(String host) {
        this.host = host;
        return this;
    }
    
    /**
     * Only check lists with this rating or better
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=list-rating")
    public Integer listRating;
    public HostReputationRequest withListRating(Integer listRating) {
        this.listRating = listRating;
        return this;
    }
    
    /**
     * Only check these DNSBL zones/hosts. Multiple zones can be supplied as comma-separated values
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=zones")
    public String zones;
    public HostReputationRequest withZones(String zones) {
        this.zones = zones;
        return this;
    }
    
}

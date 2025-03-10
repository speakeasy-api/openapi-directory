/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetOrganizationApplianceVpnStatusesRequest {
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endingBefore")
    public String endingBefore;

    public GetOrganizationApplianceVpnStatusesRequest withEndingBefore(String endingBefore) {
        this.endingBefore = endingBefore;
        return this;
    }
    
    /**
     * A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]=N_12345678&amp;networkIds[]=L_3456
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=networkIds")
    public String[] networkIds;

    public GetOrganizationApplianceVpnStatusesRequest withNetworkIds(String[] networkIds) {
        this.networkIds = networkIds;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;

    public GetOrganizationApplianceVpnStatusesRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    
    /**
     * The number of entries per page returned. Acceptable range is 3 - 300. Default is 300.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=perPage")
    public Long perPage;

    public GetOrganizationApplianceVpnStatusesRequest withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startingAfter")
    public String startingAfter;

    public GetOrganizationApplianceVpnStatusesRequest withStartingAfter(String startingAfter) {
        this.startingAfter = startingAfter;
        return this;
    }
    
    public GetOrganizationApplianceVpnStatusesRequest(@JsonProperty("organizationId") String organizationId) {
        this.organizationId = organizationId;
  }
}

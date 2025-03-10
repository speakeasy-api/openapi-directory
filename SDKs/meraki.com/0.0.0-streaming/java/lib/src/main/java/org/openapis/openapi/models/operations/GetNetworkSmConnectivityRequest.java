/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetNetworkSmConnectivityRequest {
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endingBefore")
    public String endingBefore;

    public GetNetworkSmConnectivityRequest withEndingBefore(String endingBefore) {
        this.endingBefore = endingBefore;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;

    public GetNetworkSmConnectivityRequest withId(String id) {
        this.id = id;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=network_id")
    public String networkId;

    public GetNetworkSmConnectivityRequest withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=perPage")
    public Long perPage;

    public GetNetworkSmConnectivityRequest withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startingAfter")
    public String startingAfter;

    public GetNetworkSmConnectivityRequest withStartingAfter(String startingAfter) {
        this.startingAfter = startingAfter;
        return this;
    }
    
    public GetNetworkSmConnectivityRequest(@JsonProperty("id") String id, @JsonProperty("network_id") String networkId) {
        this.id = id;
        this.networkId = networkId;
  }
}

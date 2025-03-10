/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListReplicationCyclesResponse - Response message for 'ListReplicationCycles' request.
 */
public class ListReplicationCyclesResponse {
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;

    public ListReplicationCyclesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    
    /**
     * Output only. The list of replication cycles response.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicationCycles")
    public ReplicationCycle[] replicationCycles;

    public ListReplicationCyclesResponse withReplicationCycles(ReplicationCycle[] replicationCycles) {
        this.replicationCycles = replicationCycles;
        return this;
    }
    
    /**
     * Output only. Locations that could not be reached.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;

    public ListReplicationCyclesResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
    
    public ListReplicationCyclesResponse(){}
}

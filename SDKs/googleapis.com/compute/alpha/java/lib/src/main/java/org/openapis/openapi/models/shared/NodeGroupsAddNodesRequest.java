/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class NodeGroupsAddNodesRequest {
    /**
     * Count of additional nodes to be added to the node group.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalNodeCount")
    public Integer additionalNodeCount;

    public NodeGroupsAddNodesRequest withAdditionalNodeCount(Integer additionalNodeCount) {
        this.additionalNodeCount = additionalNodeCount;
        return this;
    }
    
    public NodeGroupsAddNodesRequest(){}
}

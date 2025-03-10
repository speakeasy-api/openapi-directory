/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ComputeNodeGroupsAddNodesSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ComputeNodeGroupsAddNodesSecurityOption1 option1;

    public ComputeNodeGroupsAddNodesSecurity withOption1(ComputeNodeGroupsAddNodesSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    
    @SpeakeasyMetadata("security:option=true")
    public ComputeNodeGroupsAddNodesSecurityOption2 option2;

    public ComputeNodeGroupsAddNodesSecurity withOption2(ComputeNodeGroupsAddNodesSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    
    public ComputeNodeGroupsAddNodesSecurity(){}
}

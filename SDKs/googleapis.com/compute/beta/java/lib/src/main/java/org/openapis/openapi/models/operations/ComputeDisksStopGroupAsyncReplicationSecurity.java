/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ComputeDisksStopGroupAsyncReplicationSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ComputeDisksStopGroupAsyncReplicationSecurityOption1 option1;

    public ComputeDisksStopGroupAsyncReplicationSecurity withOption1(ComputeDisksStopGroupAsyncReplicationSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    
    @SpeakeasyMetadata("security:option=true")
    public ComputeDisksStopGroupAsyncReplicationSecurityOption2 option2;

    public ComputeDisksStopGroupAsyncReplicationSecurity withOption2(ComputeDisksStopGroupAsyncReplicationSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    
    public ComputeDisksStopGroupAsyncReplicationSecurity(){}
}

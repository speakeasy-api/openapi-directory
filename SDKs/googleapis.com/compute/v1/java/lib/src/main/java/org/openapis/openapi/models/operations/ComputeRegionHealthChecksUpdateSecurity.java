/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ComputeRegionHealthChecksUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ComputeRegionHealthChecksUpdateSecurityOption1 option1;

    public ComputeRegionHealthChecksUpdateSecurity withOption1(ComputeRegionHealthChecksUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    
    @SpeakeasyMetadata("security:option=true")
    public ComputeRegionHealthChecksUpdateSecurityOption2 option2;

    public ComputeRegionHealthChecksUpdateSecurity withOption2(ComputeRegionHealthChecksUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    
    public ComputeRegionHealthChecksUpdateSecurity(){}
}

/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ComputeHttpsHealthChecksPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ComputeHttpsHealthChecksPatchSecurityOption1 option1;

    public ComputeHttpsHealthChecksPatchSecurity withOption1(ComputeHttpsHealthChecksPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    
    @SpeakeasyMetadata("security:option=true")
    public ComputeHttpsHealthChecksPatchSecurityOption2 option2;

    public ComputeHttpsHealthChecksPatchSecurity withOption2(ComputeHttpsHealthChecksPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    
    public ComputeHttpsHealthChecksPatchSecurity(){}
}

/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ComputeRegionNotificationEndpointsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ComputeRegionNotificationEndpointsDeleteSecurityOption1 option1;

    public ComputeRegionNotificationEndpointsDeleteSecurity withOption1(ComputeRegionNotificationEndpointsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    
    @SpeakeasyMetadata("security:option=true")
    public ComputeRegionNotificationEndpointsDeleteSecurityOption2 option2;

    public ComputeRegionNotificationEndpointsDeleteSecurity withOption2(ComputeRegionNotificationEndpointsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    
    public ComputeRegionNotificationEndpointsDeleteSecurity(){}
}

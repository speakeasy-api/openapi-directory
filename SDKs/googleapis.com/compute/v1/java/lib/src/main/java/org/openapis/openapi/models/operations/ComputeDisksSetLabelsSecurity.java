/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ComputeDisksSetLabelsSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ComputeDisksSetLabelsSecurityOption1 option1;

    public ComputeDisksSetLabelsSecurity withOption1(ComputeDisksSetLabelsSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    
    @SpeakeasyMetadata("security:option=true")
    public ComputeDisksSetLabelsSecurityOption2 option2;

    public ComputeDisksSetLabelsSecurity withOption2(ComputeDisksSetLabelsSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    
    public ComputeDisksSetLabelsSecurity(){}
}

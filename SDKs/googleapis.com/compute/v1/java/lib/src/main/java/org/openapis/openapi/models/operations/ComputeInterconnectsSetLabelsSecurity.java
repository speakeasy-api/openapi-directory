/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ComputeInterconnectsSetLabelsSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ComputeInterconnectsSetLabelsSecurityOption1 option1;

    public ComputeInterconnectsSetLabelsSecurity withOption1(ComputeInterconnectsSetLabelsSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    
    @SpeakeasyMetadata("security:option=true")
    public ComputeInterconnectsSetLabelsSecurityOption2 option2;

    public ComputeInterconnectsSetLabelsSecurity withOption2(ComputeInterconnectsSetLabelsSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    
    public ComputeInterconnectsSetLabelsSecurity(){}
}

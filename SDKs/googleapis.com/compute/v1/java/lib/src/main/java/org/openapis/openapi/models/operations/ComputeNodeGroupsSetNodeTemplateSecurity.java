/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ComputeNodeGroupsSetNodeTemplateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ComputeNodeGroupsSetNodeTemplateSecurityOption1 option1;

    public ComputeNodeGroupsSetNodeTemplateSecurity withOption1(ComputeNodeGroupsSetNodeTemplateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    
    @SpeakeasyMetadata("security:option=true")
    public ComputeNodeGroupsSetNodeTemplateSecurityOption2 option2;

    public ComputeNodeGroupsSetNodeTemplateSecurity withOption2(ComputeNodeGroupsSetNodeTemplateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    
    public ComputeNodeGroupsSetNodeTemplateSecurity(){}
}

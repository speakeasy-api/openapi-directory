/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ComputeImagesDeprecateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ComputeImagesDeprecateSecurityOption1 option1;

    public ComputeImagesDeprecateSecurity withOption1(ComputeImagesDeprecateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    
    @SpeakeasyMetadata("security:option=true")
    public ComputeImagesDeprecateSecurityOption2 option2;

    public ComputeImagesDeprecateSecurity withOption2(ComputeImagesDeprecateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    
    public ComputeImagesDeprecateSecurity(){}
}

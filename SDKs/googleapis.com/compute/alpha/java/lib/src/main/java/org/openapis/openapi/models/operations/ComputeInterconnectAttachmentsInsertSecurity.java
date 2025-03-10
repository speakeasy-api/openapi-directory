/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ComputeInterconnectAttachmentsInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ComputeInterconnectAttachmentsInsertSecurityOption1 option1;

    public ComputeInterconnectAttachmentsInsertSecurity withOption1(ComputeInterconnectAttachmentsInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    
    @SpeakeasyMetadata("security:option=true")
    public ComputeInterconnectAttachmentsInsertSecurityOption2 option2;

    public ComputeInterconnectAttachmentsInsertSecurity withOption2(ComputeInterconnectAttachmentsInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    
    public ComputeInterconnectAttachmentsInsertSecurity(){}
}

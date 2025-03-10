/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ComputeNetworkAttachmentsInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ComputeNetworkAttachmentsInsertSecurityOption1 option1;

    public ComputeNetworkAttachmentsInsertSecurity withOption1(ComputeNetworkAttachmentsInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    
    @SpeakeasyMetadata("security:option=true")
    public ComputeNetworkAttachmentsInsertSecurityOption2 option2;

    public ComputeNetworkAttachmentsInsertSecurity withOption2(ComputeNetworkAttachmentsInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    
    public ComputeNetworkAttachmentsInsertSecurity(){}
}

/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DnsChangesCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DnsChangesCreateSecurityOption1 option1;

    public DnsChangesCreateSecurity withOption1(DnsChangesCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    
    @SpeakeasyMetadata("security:option=true")
    public DnsChangesCreateSecurityOption2 option2;

    public DnsChangesCreateSecurity withOption2(DnsChangesCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    
    public DnsChangesCreateSecurity(){}
}

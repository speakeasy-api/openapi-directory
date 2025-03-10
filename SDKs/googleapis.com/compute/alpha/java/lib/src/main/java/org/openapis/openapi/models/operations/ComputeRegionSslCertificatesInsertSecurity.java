/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ComputeRegionSslCertificatesInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ComputeRegionSslCertificatesInsertSecurityOption1 option1;

    public ComputeRegionSslCertificatesInsertSecurity withOption1(ComputeRegionSslCertificatesInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    
    @SpeakeasyMetadata("security:option=true")
    public ComputeRegionSslCertificatesInsertSecurityOption2 option2;

    public ComputeRegionSslCertificatesInsertSecurity withOption2(ComputeRegionSslCertificatesInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    
    public ComputeRegionSslCertificatesInsertSecurity(){}
}

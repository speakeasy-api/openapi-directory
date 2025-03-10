/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DeleteDomainCertV4Request {
    /**
     * Unique string used to identify the domain that this certificate should be associated with.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainSid")
    public String domainSid;
    public DeleteDomainCertV4Request withDomainSid(String domainSid) {
        this.domainSid = domainSid;
        return this;
    }
    
}

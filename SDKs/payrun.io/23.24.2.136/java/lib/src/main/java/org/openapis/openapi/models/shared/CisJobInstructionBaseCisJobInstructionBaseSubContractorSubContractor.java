/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CisJobInstructionBaseCisJobInstructionBaseSubContractorSubContractor {
    /**
     * The links' href
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@href")
    public String atHref;

    public CisJobInstructionBaseCisJobInstructionBaseSubContractorSubContractor withAtHref(String atHref) {
        this.atHref = atHref;
        return this;
    }
    
    /**
     * The links' target type
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@rel")
    public String atRel;

    public CisJobInstructionBaseCisJobInstructionBaseSubContractorSubContractor withAtRel(String atRel) {
        this.atRel = atRel;
        return this;
    }
    
    /**
     * The links' title
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@title")
    public String atTitle;

    public CisJobInstructionBaseCisJobInstructionBaseSubContractorSubContractor withAtTitle(String atTitle) {
        this.atTitle = atTitle;
        return this;
    }
    
    public CisJobInstructionBaseCisJobInstructionBaseSubContractorSubContractor(){}
}

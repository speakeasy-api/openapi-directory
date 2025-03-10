/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetCisInstructionFromSubContractorRequest {
    /**
     * The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;

    public GetCisInstructionFromSubContractorRequest withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    
    /**
     * The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;

    public GetCisInstructionFromSubContractorRequest withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    
    /**
     * The CIS instruction unique identifier. E.g. CIS001
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CisInstructionId")
    public String cisInstructionId;

    public GetCisInstructionFromSubContractorRequest withCisInstructionId(String cisInstructionId) {
        this.cisInstructionId = cisInstructionId;
        return this;
    }
    
    /**
     * The employers' unique identifier. E.g ER001
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;

    public GetCisInstructionFromSubContractorRequest withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    
    /**
     * The sub contractors' unique identifier. E.g SUB001
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubContractorId")
    public String subContractorId;

    public GetCisInstructionFromSubContractorRequest withSubContractorId(String subContractorId) {
        this.subContractorId = subContractorId;
        return this;
    }
    
    public GetCisInstructionFromSubContractorRequest(@JsonProperty("Api-Version") String apiVersion, @JsonProperty("Authorization") String authorization, @JsonProperty("CisInstructionId") String cisInstructionId, @JsonProperty("EmployerId") String employerId, @JsonProperty("SubContractorId") String subContractorId) {
        this.apiVersion = apiVersion;
        this.authorization = authorization;
        this.cisInstructionId = cisInstructionId;
        this.employerId = employerId;
        this.subContractorId = subContractorId;
  }
}

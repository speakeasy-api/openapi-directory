/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetBenefitsDocumentUploadStatus401ApplicationJSON - Unauthorized request
 */
public class GetBenefitsDocumentUploadStatus401ApplicationJSON {
    /**
     * Error detail
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;

    public GetBenefitsDocumentUploadStatus401ApplicationJSON withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public GetBenefitsDocumentUploadStatus401ApplicationJSON(){}
}

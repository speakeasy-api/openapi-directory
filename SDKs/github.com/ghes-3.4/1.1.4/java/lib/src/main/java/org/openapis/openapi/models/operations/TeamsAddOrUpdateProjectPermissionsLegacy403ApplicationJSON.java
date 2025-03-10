/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSON - Forbidden if the project is not owned by the organization
 */
public class TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentation_url")
    public String documentationUrl;

    public TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSON withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;

    public TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSON withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSON(){}
}

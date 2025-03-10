/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposCreateForkRequestBody {
    /**
     * Optional parameter to specify the organization name if forking into an organization.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public String organization;

    public ReposCreateForkRequestBody withOrganization(String organization) {
        this.organization = organization;
        return this;
    }
    
    public ReposCreateForkRequestBody(){}
}

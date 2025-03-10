/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class OrgsRemoveOutsideCollaboratorRequest {
    /**
     * The organization name. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;

    public OrgsRemoveOutsideCollaboratorRequest withOrg(String org) {
        this.org = org;
        return this;
    }
    
    /**
     * The handle for the GitHub user account.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;

    public OrgsRemoveOutsideCollaboratorRequest withUsername(String username) {
        this.username = username;
        return this;
    }
    
    public OrgsRemoveOutsideCollaboratorRequest(@JsonProperty("org") String org, @JsonProperty("username") String username) {
        this.org = org;
        this.username = username;
  }
}

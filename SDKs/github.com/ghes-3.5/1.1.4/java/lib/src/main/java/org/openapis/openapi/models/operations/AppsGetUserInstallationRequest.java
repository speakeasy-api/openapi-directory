/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class AppsGetUserInstallationRequest {
    /**
     * The handle for the GitHub user account.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;

    public AppsGetUserInstallationRequest withUsername(String username) {
        this.username = username;
        return this;
    }
    
    public AppsGetUserInstallationRequest(@JsonProperty("username") String username) {
        this.username = username;
  }
}

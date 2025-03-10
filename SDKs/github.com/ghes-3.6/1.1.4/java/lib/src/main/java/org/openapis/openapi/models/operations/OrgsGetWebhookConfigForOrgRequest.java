/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class OrgsGetWebhookConfigForOrgRequest {
    /**
     * The unique identifier of the hook.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=hook_id")
    public Long hookId;

    public OrgsGetWebhookConfigForOrgRequest withHookId(Long hookId) {
        this.hookId = hookId;
        return this;
    }
    
    /**
     * The organization name. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;

    public OrgsGetWebhookConfigForOrgRequest withOrg(String org) {
        this.org = org;
        return this;
    }
    
    public OrgsGetWebhookConfigForOrgRequest(@JsonProperty("hook_id") Long hookId, @JsonProperty("org") String org) {
        this.hookId = hookId;
        this.org = org;
  }
}

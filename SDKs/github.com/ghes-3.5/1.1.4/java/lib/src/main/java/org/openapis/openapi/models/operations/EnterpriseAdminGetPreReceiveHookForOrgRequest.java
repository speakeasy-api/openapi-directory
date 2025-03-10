/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class EnterpriseAdminGetPreReceiveHookForOrgRequest {
    /**
     * The organization name. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;

    public EnterpriseAdminGetPreReceiveHookForOrgRequest withOrg(String org) {
        this.org = org;
        return this;
    }
    
    /**
     * The unique identifier of the pre-receive hook.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pre_receive_hook_id")
    public Long preReceiveHookId;

    public EnterpriseAdminGetPreReceiveHookForOrgRequest withPreReceiveHookId(Long preReceiveHookId) {
        this.preReceiveHookId = preReceiveHookId;
        return this;
    }
    
    public EnterpriseAdminGetPreReceiveHookForOrgRequest(@JsonProperty("org") String org, @JsonProperty("pre_receive_hook_id") Long preReceiveHookId) {
        this.org = org;
        this.preReceiveHookId = preReceiveHookId;
  }
}

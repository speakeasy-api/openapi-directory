/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody requestBody;

    public EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest withRequestBody(EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enterprise")
    public String enterprise;

    public EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest withEnterprise(String enterprise) {
        this.enterprise = enterprise;
        return this;
    }
    
    /**
     * Unique identifier of the self-hosted runner group.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runner_group_id")
    public Long runnerGroupId;

    public EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest withRunnerGroupId(Long runnerGroupId) {
        this.runnerGroupId = runnerGroupId;
        return this;
    }
    
    public EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest(@JsonProperty("RequestBody") EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody requestBody, @JsonProperty("enterprise") String enterprise, @JsonProperty("runner_group_id") Long runnerGroupId) {
        this.requestBody = requestBody;
        this.enterprise = enterprise;
        this.runnerGroupId = runnerGroupId;
  }
}

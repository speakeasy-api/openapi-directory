/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest {
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enterprise")
    public String enterprise;

    public EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest withEnterprise(String enterprise) {
        this.enterprise = enterprise;
        return this;
    }
    
    /**
     * Page number of the results to fetch.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;

    public EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest withPage(Long page) {
        this.page = page;
        return this;
    }
    
    /**
     * The number of results per page (max 100).
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;

    public EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    
    public EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest(@JsonProperty("enterprise") String enterprise) {
        this.enterprise = enterprise;
  }
}

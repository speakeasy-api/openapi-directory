/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class FetchPatientPlanSummariesRequest {
    /**
     * Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
     * 
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[groups]")
    public String filterGroups;

    public FetchPatientPlanSummariesRequest withFilterGroups(String filterGroups) {
        this.filterGroups = filterGroups;
        return this;
    }
    
    /**
     * Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
     * 
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[organization]")
    public String filterOrganization;

    public FetchPatientPlanSummariesRequest withFilterOrganization(String filterOrganization) {
        this.filterOrganization = filterOrganization;
        return this;
    }
    
    /**
     * Patient id to fetch plan summary for. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
     * 
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[patient]")
    public String filterPatient;

    public FetchPatientPlanSummariesRequest withFilterPatient(String filterPatient) {
        this.filterPatient = filterPatient;
        return this;
    }
    
    /**
     * List of related resources to include in the response
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public FetchPatientPlanSummariesIncludeEnum include;

    public FetchPatientPlanSummariesRequest withInclude(FetchPatientPlanSummariesIncludeEnum include) {
        this.include = include;
        return this;
    }
    
    public FetchPatientPlanSummariesRequest(){}
}

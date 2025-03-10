/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse - OK
 */
public class ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assigned_add_ons")
    public org.openapis.openapi.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn[] assignedAddOns;
    public ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse withAssignedAddOns(org.openapis.openapi.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn[] assignedAddOns) {
        this.assignedAddOns = assignedAddOns;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Long end;
    public ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse withEnd(Long end) {
        this.end = end;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_page_uri")
    public String firstPageUri;
    public ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse withFirstPageUri(String firstPageUri) {
        this.firstPageUri = firstPageUri;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_uri")
    public String nextPageUri;
    public ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse withNextPageUri(String nextPageUri) {
        this.nextPageUri = nextPageUri;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse withPage(Long page) {
        this.page = page;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_page_uri")
    public String previousPageUri;
    public ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse withPreviousPageUri(String previousPageUri) {
        this.previousPageUri = previousPageUri;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Long start;
    public ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse withStart(Long start) {
        this.start = start;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse withUri(String uri) {
        this.uri = uri;
        return this;
    }
    
}

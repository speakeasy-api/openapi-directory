/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PaginatedEndUserAgreementList - Retrieve all end user agreements
 */
public class PaginatedEndUserAgreementList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;

    public PaginatedEndUserAgreementList withCount(Long count) {
        this.count = count;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;

    public PaginatedEndUserAgreementList withNext(String next) {
        this.next = next;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;

    public PaginatedEndUserAgreementList withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public EndUserAgreement[] results;

    public PaginatedEndUserAgreementList withResults(EndUserAgreement[] results) {
        this.results = results;
        return this;
    }
    
    public PaginatedEndUserAgreementList(){}
}

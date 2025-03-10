/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class RetrieveDistributionLinksResponseResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elements")
    public RetrieveDistributionLinksResponseResultElements[] elements;

    public RetrieveDistributionLinksResponseResult withElements(RetrieveDistributionLinksResponseResultElements[] elements) {
        this.elements = elements;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public Object nextPage;

    public RetrieveDistributionLinksResponseResult withNextPage(Object nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    
    public RetrieveDistributionLinksResponseResult(){}
}

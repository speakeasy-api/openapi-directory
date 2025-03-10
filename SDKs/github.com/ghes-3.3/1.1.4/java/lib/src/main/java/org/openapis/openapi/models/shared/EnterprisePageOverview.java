/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EnterprisePageOverview - Response
 */
public class EnterprisePageOverview {
    @JsonProperty("total_pages")
    public Long totalPages;

    public EnterprisePageOverview withTotalPages(Long totalPages) {
        this.totalPages = totalPages;
        return this;
    }
    
    public EnterprisePageOverview(@JsonProperty("total_pages") Long totalPages) {
        this.totalPages = totalPages;
  }
}

/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class OrderFee {
    /**
     * Domain registration transaction fee charged by ICANN
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icann")
    public Long icann;

    public OrderFee withIcann(Long icann) {
        this.icann = icann;
        return this;
    }
    
    /**
     * Sum of all fees
     */
    @JsonProperty("total")
    public Long total;

    public OrderFee withTotal(Long total) {
        this.total = total;
        return this;
    }
    
    public OrderFee(@JsonProperty("total") Long total) {
        this.total = total;
  }
}

/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ProductNumberRequest {
    /**
     * Unique number that identifies the Product.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productNumber")
    public String productNumber;

    public ProductNumberRequest withProductNumber(String productNumber) {
        this.productNumber = productNumber;
        return this;
    }
    
    public ProductNumberRequest(@JsonProperty("productNumber") String productNumber) {
        this.productNumber = productNumber;
  }
}

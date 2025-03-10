/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetNumbersPrimeFactorsRequest {
    /**
     * Number to get the factors
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public Long number;

    public GetNumbersPrimeFactorsRequest withNumber(Long number) {
        this.number = number;
        return this;
    }
    
    public GetNumbersPrimeFactorsRequest(){}
}

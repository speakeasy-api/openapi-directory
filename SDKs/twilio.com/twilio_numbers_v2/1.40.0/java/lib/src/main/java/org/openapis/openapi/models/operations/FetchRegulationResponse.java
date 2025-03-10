/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class FetchRegulationResponse {
    
    public String contentType;
    public FetchRegulationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;
    public FetchRegulationResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public FetchRegulationResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.NumbersV2RegulatoryComplianceRegulation numbersV2RegulatoryComplianceRegulation;
    public FetchRegulationResponse withNumbersV2RegulatoryComplianceRegulation(org.openapis.openapi.models.shared.NumbersV2RegulatoryComplianceRegulation numbersV2RegulatoryComplianceRegulation) {
        this.numbersV2RegulatoryComplianceRegulation = numbersV2RegulatoryComplianceRegulation;
        return this;
    }
    
}

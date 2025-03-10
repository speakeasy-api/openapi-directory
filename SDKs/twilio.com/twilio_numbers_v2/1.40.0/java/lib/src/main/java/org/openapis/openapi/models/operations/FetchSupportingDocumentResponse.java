/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class FetchSupportingDocumentResponse {
    
    public String contentType;
    public FetchSupportingDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;
    public FetchSupportingDocumentResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public FetchSupportingDocumentResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.NumbersV2RegulatoryComplianceSupportingDocument numbersV2RegulatoryComplianceSupportingDocument;
    public FetchSupportingDocumentResponse withNumbersV2RegulatoryComplianceSupportingDocument(org.openapis.openapi.models.shared.NumbersV2RegulatoryComplianceSupportingDocument numbersV2RegulatoryComplianceSupportingDocument) {
        this.numbersV2RegulatoryComplianceSupportingDocument = numbersV2RegulatoryComplianceSupportingDocument;
        return this;
    }
    
}

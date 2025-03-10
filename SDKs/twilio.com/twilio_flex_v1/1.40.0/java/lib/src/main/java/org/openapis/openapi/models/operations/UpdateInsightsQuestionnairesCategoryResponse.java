/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class UpdateInsightsQuestionnairesCategoryResponse {
    
    public String contentType;
    public UpdateInsightsQuestionnairesCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;
    public UpdateInsightsQuestionnairesCategoryResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public UpdateInsightsQuestionnairesCategoryResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.FlexV1InsightsQuestionnairesCategory flexV1InsightsQuestionnairesCategory;
    public UpdateInsightsQuestionnairesCategoryResponse withFlexV1InsightsQuestionnairesCategory(org.openapis.openapi.models.shared.FlexV1InsightsQuestionnairesCategory flexV1InsightsQuestionnairesCategory) {
        this.flexV1InsightsQuestionnairesCategory = flexV1InsightsQuestionnairesCategory;
        return this;
    }
    
}

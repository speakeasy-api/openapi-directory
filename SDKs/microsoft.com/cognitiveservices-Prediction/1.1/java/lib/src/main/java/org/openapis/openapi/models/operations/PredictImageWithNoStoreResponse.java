/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PredictImageWithNoStoreResponse {
    
    public byte[] body;

    public PredictImageWithNoStoreResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    
    
    public String contentType;

    public PredictImageWithNoStoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.ImagePredictionResultModel imagePredictionResultModel;

    public PredictImageWithNoStoreResponse withImagePredictionResultModel(org.openapis.openapi.models.shared.ImagePredictionResultModel imagePredictionResultModel) {
        this.imagePredictionResultModel = imagePredictionResultModel;
        return this;
    }
    
    
    public Integer statusCode;

    public PredictImageWithNoStoreResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PredictImageWithNoStoreResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public PredictImageWithNoStoreResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}

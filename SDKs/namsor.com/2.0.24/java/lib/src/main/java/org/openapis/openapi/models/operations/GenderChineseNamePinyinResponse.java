/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GenderChineseNamePinyinResponse {
    
    public String contentType;

    public GenderChineseNamePinyinResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * A genderized name.
     */
    
    public org.openapis.openapi.models.shared.FirstLastNameGenderedOut firstLastNameGenderedOut;

    public GenderChineseNamePinyinResponse withFirstLastNameGenderedOut(org.openapis.openapi.models.shared.FirstLastNameGenderedOut firstLastNameGenderedOut) {
        this.firstLastNameGenderedOut = firstLastNameGenderedOut;
        return this;
    }
    
    
    public Integer statusCode;

    public GenderChineseNamePinyinResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GenderChineseNamePinyinResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GenderChineseNamePinyinResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}

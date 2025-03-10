/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class CreateImagesFromPredictionsRawRequest {
    /**
     * Image and tag ids. Limited to 64 images and 20 tags per batch
     */
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] requestBody;

    public CreateImagesFromPredictionsRawRequest withRequestBody(byte[] requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;

    public CreateImagesFromPredictionsRawRequest withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
    
    /**
     * The project id
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;

    public CreateImagesFromPredictionsRawRequest withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    
    public CreateImagesFromPredictionsRawRequest(@JsonProperty("RequestBody") byte[] requestBody, @JsonProperty("Training-Key") String trainingKey, @JsonProperty("projectId") String projectId) {
        this.requestBody = requestBody;
        this.trainingKey = trainingKey;
        this.projectId = projectId;
  }
}

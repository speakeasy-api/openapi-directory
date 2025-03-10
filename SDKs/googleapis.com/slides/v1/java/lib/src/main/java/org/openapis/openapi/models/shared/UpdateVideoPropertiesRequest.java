/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateVideoPropertiesRequest - Update the properties of a Video.
 */
public class UpdateVideoPropertiesRequest {
    /**
     * The fields that should be updated. At least one field must be specified. The root `videoProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the video outline color, set `fields` to `"outline.outlineFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public String fields;

    public UpdateVideoPropertiesRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * The object ID of the video the updates are applied to.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectId")
    public String objectId;

    public UpdateVideoPropertiesRequest withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    
    /**
     * The properties of the Video.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoProperties")
    public VideoProperties videoProperties;

    public UpdateVideoPropertiesRequest withVideoProperties(VideoProperties videoProperties) {
        this.videoProperties = videoProperties;
        return this;
    }
    
    public UpdateVideoPropertiesRequest(){}
}

/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class CreateUnderstandSampleCreateUnderstandSampleRequest {
    /**
     * An ISO language-country string of the sample.
     */
    @SpeakeasyMetadata("form:name=Language")
    public String language;

    public CreateUnderstandSampleCreateUnderstandSampleRequest withLanguage(String language) {
        this.language = language;
        return this;
    }
    
    /**
     * The communication channel the sample was captured. It can be: *voice*, *sms*, *chat*, *alexa*, *google-assistant*, or *slack*. If not included the value will be null
     */
    @SpeakeasyMetadata("form:name=SourceChannel")
    public String sourceChannel;

    public CreateUnderstandSampleCreateUnderstandSampleRequest withSourceChannel(String sourceChannel) {
        this.sourceChannel = sourceChannel;
        return this;
    }
    
    /**
     * The text example of how end-users may express this task. The sample may contain Field tag blocks.
     */
    @SpeakeasyMetadata("form:name=TaggedText")
    public String taggedText;

    public CreateUnderstandSampleCreateUnderstandSampleRequest withTaggedText(String taggedText) {
        this.taggedText = taggedText;
        return this;
    }
    
    public CreateUnderstandSampleCreateUnderstandSampleRequest(@JsonProperty("Language") String language, @JsonProperty("TaggedText") String taggedText) {
        this.language = language;
        this.taggedText = taggedText;
  }
}

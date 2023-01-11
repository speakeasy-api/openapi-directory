package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1TextMetadata
 * Metadata for the text.
**/
public class GoogleCloudDatalabelingV1beta1TextMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleCloudDatalabelingV1beta1TextMetadata withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
}
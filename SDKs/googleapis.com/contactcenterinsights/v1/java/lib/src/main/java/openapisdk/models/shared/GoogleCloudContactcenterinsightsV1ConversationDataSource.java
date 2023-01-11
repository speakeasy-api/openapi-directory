package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1ConversationDataSource
 * The conversation source, which is a combination of transcript and audio.
**/
public class GoogleCloudContactcenterinsightsV1ConversationDataSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dialogflowSource")
    public GoogleCloudContactcenterinsightsV1DialogflowSource dialogflowSource;
    public GoogleCloudContactcenterinsightsV1ConversationDataSource withDialogflowSource(GoogleCloudContactcenterinsightsV1DialogflowSource dialogflowSource) {
        this.dialogflowSource = dialogflowSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsSource")
    public GoogleCloudContactcenterinsightsV1GcsSource gcsSource;
    public GoogleCloudContactcenterinsightsV1ConversationDataSource withGcsSource(GoogleCloudContactcenterinsightsV1GcsSource gcsSource) {
        this.gcsSource = gcsSource;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1ConversationDataSourceInput
 * The conversation source, which is a combination of transcript and audio.
**/
public class GoogleCloudContactcenterinsightsV1ConversationDataSourceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dialogflowSource")
    public GoogleCloudContactcenterinsightsV1DialogflowSourceInput dialogflowSource;
    public GoogleCloudContactcenterinsightsV1ConversationDataSourceInput withDialogflowSource(GoogleCloudContactcenterinsightsV1DialogflowSourceInput dialogflowSource) {
        this.dialogflowSource = dialogflowSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsSource")
    public GoogleCloudContactcenterinsightsV1GcsSource gcsSource;
    public GoogleCloudContactcenterinsightsV1ConversationDataSourceInput withGcsSource(GoogleCloudContactcenterinsightsV1GcsSource gcsSource) {
        this.gcsSource = gcsSource;
        return this;
    }
}
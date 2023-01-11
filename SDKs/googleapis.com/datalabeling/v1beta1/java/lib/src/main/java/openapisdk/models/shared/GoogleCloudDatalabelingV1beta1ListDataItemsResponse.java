package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ListDataItemsResponse
 * Results of listing data items in a dataset.
**/
public class GoogleCloudDatalabelingV1beta1ListDataItemsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataItems")
    public GoogleCloudDatalabelingV1beta1DataItem[] dataItems;
    public GoogleCloudDatalabelingV1beta1ListDataItemsResponse withDataItems(GoogleCloudDatalabelingV1beta1DataItem[] dataItems) {
        this.dataItems = dataItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudDatalabelingV1beta1ListDataItemsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}
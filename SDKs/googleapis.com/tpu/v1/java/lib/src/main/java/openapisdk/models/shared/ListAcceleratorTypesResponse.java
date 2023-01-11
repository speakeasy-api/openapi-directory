package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAcceleratorTypesResponse
 * Response for ListAcceleratorTypes.
**/
public class ListAcceleratorTypesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceleratorTypes")
    public AcceleratorType[] acceleratorTypes;
    public ListAcceleratorTypesResponse withAcceleratorTypes(AcceleratorType[] acceleratorTypes) {
        this.acceleratorTypes = acceleratorTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAcceleratorTypesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListAcceleratorTypesResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}
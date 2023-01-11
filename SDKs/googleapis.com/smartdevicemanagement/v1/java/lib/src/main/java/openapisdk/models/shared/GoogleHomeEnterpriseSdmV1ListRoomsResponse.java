package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleHomeEnterpriseSdmV1ListRoomsResponse
 * Response message for SmartDeviceManagementService.ListRooms
**/
public class GoogleHomeEnterpriseSdmV1ListRoomsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleHomeEnterpriseSdmV1ListRoomsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rooms")
    public GoogleHomeEnterpriseSdmV1Room[] rooms;
    public GoogleHomeEnterpriseSdmV1ListRoomsResponse withRooms(GoogleHomeEnterpriseSdmV1Room[] rooms) {
        this.rooms = rooms;
        return this;
    }
}
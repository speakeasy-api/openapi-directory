package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlaylistItemStatus
 * Information about the playlist item's privacy status.
**/
public class PlaylistItemStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacyStatus")
    public PlaylistItemStatusPrivacyStatusEnum privacyStatus;
    public PlaylistItemStatus withPrivacyStatus(PlaylistItemStatusPrivacyStatusEnum privacyStatus) {
        this.privacyStatus = privacyStatus;
        return this;
    }
}
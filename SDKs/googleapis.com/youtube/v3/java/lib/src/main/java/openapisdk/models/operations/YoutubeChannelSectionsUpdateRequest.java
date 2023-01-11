package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeChannelSectionsUpdateRequest {
    public YoutubeChannelSectionsUpdateQueryParams queryParams;
    public YoutubeChannelSectionsUpdateRequest withQueryParams(YoutubeChannelSectionsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChannelSection request;
    public YoutubeChannelSectionsUpdateRequest withRequest(openapisdk.models.shared.ChannelSection request) {
        this.request = request;
        return this;
    }
    public YoutubeChannelSectionsUpdateSecurity security;
    public YoutubeChannelSectionsUpdateRequest withSecurity(YoutubeChannelSectionsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}
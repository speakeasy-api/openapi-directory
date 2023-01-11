package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeChannelSectionsInsertRequest {
    public YoutubeChannelSectionsInsertQueryParams queryParams;
    public YoutubeChannelSectionsInsertRequest withQueryParams(YoutubeChannelSectionsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChannelSection request;
    public YoutubeChannelSectionsInsertRequest withRequest(openapisdk.models.shared.ChannelSection request) {
        this.request = request;
        return this;
    }
    public YoutubeChannelSectionsInsertSecurity security;
    public YoutubeChannelSectionsInsertRequest withSecurity(YoutubeChannelSectionsInsertSecurity security) {
        this.security = security;
        return this;
    }
}
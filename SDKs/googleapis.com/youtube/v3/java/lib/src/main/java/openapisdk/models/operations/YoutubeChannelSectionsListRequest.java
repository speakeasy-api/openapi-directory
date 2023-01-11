package openapisdk.models.operations;



public class YoutubeChannelSectionsListRequest {
    public YoutubeChannelSectionsListQueryParams queryParams;
    public YoutubeChannelSectionsListRequest withQueryParams(YoutubeChannelSectionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeChannelSectionsListSecurity security;
    public YoutubeChannelSectionsListRequest withSecurity(YoutubeChannelSectionsListSecurity security) {
        this.security = security;
        return this;
    }
}
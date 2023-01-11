package openapisdk.models.shared;


public enum ChannelSectionSnippetTypeEnum {
    CHANNELSECTION_TYPE_UNDEFINED("channelsectionTypeUndefined"),
    SINGLE_PLAYLIST("singlePlaylist"),
    MULTIPLE_PLAYLISTS("multiplePlaylists"),
    POPULAR_UPLOADS("popularUploads"),
    RECENT_UPLOADS("recentUploads"),
    LIKES("likes"),
    ALL_PLAYLISTS("allPlaylists"),
    LIKED_PLAYLISTS("likedPlaylists"),
    RECENT_POSTS("recentPosts"),
    RECENT_ACTIVITY("recentActivity"),
    LIVE_EVENTS("liveEvents"),
    UPCOMING_EVENTS("upcomingEvents"),
    COMPLETED_EVENTS("completedEvents"),
    MULTIPLE_CHANNELS("multipleChannels"),
    POSTED_VIDEOS("postedVideos"),
    POSTED_PLAYLISTS("postedPlaylists"),
    SUBSCRIPTIONS("subscriptions");

    public final String value;

    private ChannelSectionSnippetTypeEnum(String value) {
        this.value = value;
    }
}

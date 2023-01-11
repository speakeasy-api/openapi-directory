package openapisdk.models.shared;



/**
 * TimelineListResponse
 * A list of timeline items. This is the response from the server to GET requests on the timeline collection.
**/
public class TimelineListResponse {
    public TimelineItem[] items;
    public TimelineListResponse withItems(TimelineItem[] items) {
        this.items = items;
        return this;
    }
    public String kind;
    public TimelineListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    public String nextPageToken;
    public TimelineListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}
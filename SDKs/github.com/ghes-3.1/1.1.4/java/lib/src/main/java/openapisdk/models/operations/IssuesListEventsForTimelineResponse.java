package openapisdk.models.operations;



public class IssuesListEventsForTimelineResponse {
    public String contentType;
    public IssuesListEventsForTimelineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public IssuesListEventsForTimelineResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public IssuesListEventsForTimelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesListEventsForTimelineResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.IssueEventForIssue[] issueEventForIssues;
    public IssuesListEventsForTimelineResponse withIssueEventForIssues(openapisdk.models.shared.IssueEventForIssue[] issueEventForIssues) {
        this.issueEventForIssues = issueEventForIssues;
        return this;
    }
    public IssuesListEventsForTimeline415ApplicationJson issuesListEventsForTimeline415ApplicationJSONObject;
    public IssuesListEventsForTimelineResponse withIssuesListEventsForTimeline415ApplicationJsonObject(IssuesListEventsForTimeline415ApplicationJson issuesListEventsForTimeline415ApplicationJSONObject) {
        this.issuesListEventsForTimeline415ApplicationJSONObject = issuesListEventsForTimeline415ApplicationJSONObject;
        return this;
    }
}
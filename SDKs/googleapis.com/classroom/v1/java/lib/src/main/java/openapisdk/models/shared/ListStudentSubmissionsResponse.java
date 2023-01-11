package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListStudentSubmissionsResponse
 * Response when listing student submissions.
**/
public class ListStudentSubmissionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListStudentSubmissionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studentSubmissions")
    public StudentSubmission[] studentSubmissions;
    public ListStudentSubmissionsResponse withStudentSubmissions(StudentSubmission[] studentSubmissions) {
        this.studentSubmissions = studentSubmissions;
        return this;
    }
}
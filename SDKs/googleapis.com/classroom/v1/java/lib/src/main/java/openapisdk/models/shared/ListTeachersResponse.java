package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTeachersResponse
 * Response when listing teachers.
**/
public class ListTeachersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListTeachersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teachers")
    public Teacher[] teachers;
    public ListTeachersResponse withTeachers(Teacher[] teachers) {
        this.teachers = teachers;
        return this;
    }
}
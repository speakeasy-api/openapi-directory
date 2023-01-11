package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCourseAliasesResponse
 * Response when listing course aliases.
**/
public class ListCourseAliasesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aliases")
    public CourseAlias[] aliases;
    public ListCourseAliasesResponse withAliases(CourseAlias[] aliases) {
        this.aliases = aliases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCourseAliasesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}
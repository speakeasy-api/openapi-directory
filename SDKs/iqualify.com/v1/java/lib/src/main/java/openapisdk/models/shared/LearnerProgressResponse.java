package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class LearnerProgressResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completion")
    public String completion;
    public LearnerProgressResponse withCompletion(String completion) {
        this.completion = completion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("courseId")
    public String courseId;
    public LearnerProgressResponse withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public LearnerProgressResponse withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public LearnerProgressResponse withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastLoggedInAt")
    public OffsetDateTime lastLoggedInAt;
    public LearnerProgressResponse withLastLoggedInAt(OffsetDateTime lastLoggedInAt) {
        this.lastLoggedInAt = lastLoggedInAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public LearnerProgressResponse withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personId")
    public String personId;
    public LearnerProgressResponse withPersonId(String personId) {
        this.personId = personId;
        return this;
    }
}
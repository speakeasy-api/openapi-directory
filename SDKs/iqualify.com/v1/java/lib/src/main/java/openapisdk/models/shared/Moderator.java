package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Moderator {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avatarUrl")
    public String avatarUrl;
    public Moderator withAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public Moderator withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Moderator withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public Moderator withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
}
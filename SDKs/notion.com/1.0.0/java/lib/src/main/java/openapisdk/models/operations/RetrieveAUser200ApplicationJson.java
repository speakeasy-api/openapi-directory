package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveAUser200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avatar_url")
    public Object avatarUrl;
    public RetrieveAUser200ApplicationJson withAvatarUrl(Object avatarUrl) {
        this.avatarUrl = avatarUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RetrieveAUser200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RetrieveAUser200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public RetrieveAUser200ApplicationJson withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("person")
    public RetrieveAUser200ApplicationJsonPerson person;
    public RetrieveAUser200ApplicationJson withPerson(RetrieveAUser200ApplicationJsonPerson person) {
        this.person = person;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RetrieveAUser200ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}
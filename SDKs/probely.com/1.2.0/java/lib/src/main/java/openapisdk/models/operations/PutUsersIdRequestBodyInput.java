package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutUsersIdRequestBodyInput {
    @JsonProperty("email")
    public String email;
    public PutUsersIdRequestBodyInput withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutUsersIdRequestBodyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public openapisdk.models.shared.UserTitleEnum title;
    public PutUsersIdRequestBodyInput withTitle(openapisdk.models.shared.UserTitleEnum title) {
        this.title = title;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatchUsersIdRequestBodyInput {
    @JsonProperty("email")
    public String email;
    public PatchUsersIdRequestBodyInput withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PatchUsersIdRequestBodyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public openapisdk.models.shared.UserTitleEnum title;
    public PatchUsersIdRequestBodyInput withTitle(openapisdk.models.shared.UserTitleEnum title) {
        this.title = title;
        return this;
    }
}
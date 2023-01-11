package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SaveWorkflowUserRequestBody {
    @JsonProperty("validatedUsers")
    public String[] validatedUsers;
    public SaveWorkflowUserRequestBody withValidatedUsers(String[] validatedUsers) {
        this.validatedUsers = validatedUsers;
        return this;
    }
}
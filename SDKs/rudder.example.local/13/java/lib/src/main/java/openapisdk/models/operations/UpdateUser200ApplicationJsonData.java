package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateUser200ApplicationJsonData {
    @JsonProperty("updatedUser")
    public UpdateUser200ApplicationJsonDataUpdatedUser updatedUser;
    public UpdateUser200ApplicationJsonData withUpdatedUser(UpdateUser200ApplicationJsonDataUpdatedUser updatedUser) {
        this.updatedUser = updatedUser;
        return this;
    }
}
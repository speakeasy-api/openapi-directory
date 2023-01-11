package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteUser200ApplicationJsonData {
    @JsonProperty("deletedUser")
    public DeleteUser200ApplicationJsonDataDeletedUser deletedUser;
    public DeleteUser200ApplicationJsonData withDeletedUser(DeleteUser200ApplicationJsonDataDeletedUser deletedUser) {
        this.deletedUser = deletedUser;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddUser200ApplicationJsonData {
    @JsonProperty("addedUser")
    public AddUser200ApplicationJsonDataAddedUser addedUser;
    public AddUser200ApplicationJsonData withAddedUser(AddUser200ApplicationJsonDataAddedUser addedUser) {
        this.addedUser = addedUser;
        return this;
    }
}
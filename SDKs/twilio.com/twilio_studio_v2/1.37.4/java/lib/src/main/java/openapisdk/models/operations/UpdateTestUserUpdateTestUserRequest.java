package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTestUserUpdateTestUserRequest {
    @SpeakeasyMetadata("form:name=TestUsers")
    public String[] testUsers;
    public UpdateTestUserUpdateTestUserRequest withTestUsers(String[] testUsers) {
        this.testUsers = testUsers;
        return this;
    }
}
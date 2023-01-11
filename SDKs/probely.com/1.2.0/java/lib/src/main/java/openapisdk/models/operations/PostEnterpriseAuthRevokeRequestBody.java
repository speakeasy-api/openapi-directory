package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostEnterpriseAuthRevokeRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public PostEnterpriseAuthRevokeRequestBody withToken(String token) {
        this.token = token;
        return this;
    }
}
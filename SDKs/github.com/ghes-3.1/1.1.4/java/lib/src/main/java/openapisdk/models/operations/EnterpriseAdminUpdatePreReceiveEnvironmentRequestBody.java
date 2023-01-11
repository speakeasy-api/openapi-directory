package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_url")
    public String imageUrl;
    public EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icon")
    public String icon;
    public GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest withIcon(String icon) {
        this.icon = icon;
        return this;
    }
}
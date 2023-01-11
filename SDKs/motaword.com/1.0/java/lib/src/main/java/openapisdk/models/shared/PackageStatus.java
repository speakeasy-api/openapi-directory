package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PackageStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PackageStatusEnumEnum status;
    public PackageStatus withStatus(PackageStatusEnumEnum status) {
        this.status = status;
        return this;
    }
}
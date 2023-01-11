package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ControllersPackageDetailResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ControllersPackageDetailItem data;
    public ControllersPackageDetailResponse withData(ControllersPackageDetailItem data) {
        this.data = data;
        return this;
    }
}
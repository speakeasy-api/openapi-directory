package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OrgsListAppInstallations200ApplicationJson {
    @JsonProperty("installations")
    public openapisdk.models.shared.Installation[] installations;
    public OrgsListAppInstallations200ApplicationJson withInstallations(openapisdk.models.shared.Installation[] installations) {
        this.installations = installations;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public OrgsListAppInstallations200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}
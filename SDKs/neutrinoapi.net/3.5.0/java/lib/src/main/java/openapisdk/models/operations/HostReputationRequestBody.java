package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HostReputationRequestBody {
    @SpeakeasyMetadata("form:name=host")
    public String host;
    public HostReputationRequestBody withHost(String host) {
        this.host = host;
        return this;
    }
    @SpeakeasyMetadata("form:name=list-rating")
    public Integer listRating;
    public HostReputationRequestBody withListRating(Integer listRating) {
        this.listRating = listRating;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-case")
    public HostReputationRequestBodyOutputCaseEnum outputCase;
    public HostReputationRequestBody withOutputCase(HostReputationRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
}
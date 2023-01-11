package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostApiTextHumanizeRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.TextDto textDto;
    public PostApiTextHumanizeRequests withTextDto(openapisdk.models.shared.TextDto textDto) {
        this.textDto = textDto;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TextDto textDto1;
    public PostApiTextHumanizeRequests withTextDto1(openapisdk.models.shared.TextDto textDto1) {
        this.textDto1 = textDto1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.TextDto textDto2;
    public PostApiTextHumanizeRequests withTextDto2(openapisdk.models.shared.TextDto textDto2) {
        this.textDto2 = textDto2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.TextDto textDto3;
    public PostApiTextHumanizeRequests withTextDto3(openapisdk.models.shared.TextDto textDto3) {
        this.textDto3 = textDto3;
        return this;
    }
}
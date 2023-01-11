package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostImproveRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImprovementProgramJson improvementProgramJson;
    public PostImproveRequests withImprovementProgramJson(openapisdk.models.shared.ImprovementProgramJson improvementProgramJson) {
        this.improvementProgramJson = improvementProgramJson;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.ImprovementProgramJson improvementProgramJson1;
    public PostImproveRequests withImprovementProgramJson1(openapisdk.models.shared.ImprovementProgramJson improvementProgramJson1) {
        this.improvementProgramJson1 = improvementProgramJson1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public openapisdk.models.shared.ImprovementProgramMultipart improvementProgramMultipart;
    public PostImproveRequests withImprovementProgramMultipart(openapisdk.models.shared.ImprovementProgramMultipart improvementProgramMultipart) {
        this.improvementProgramMultipart = improvementProgramMultipart;
        return this;
    }
}
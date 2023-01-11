package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1BusinessusersRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.BusinessUserInputModel businessUserInputModel;
    public PostSetupV1BusinessusersRequests withBusinessUserInputModel(openapisdk.models.shared.BusinessUserInputModel businessUserInputModel) {
        this.businessUserInputModel = businessUserInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BusinessUserInputModel businessUserInputModel1;
    public PostSetupV1BusinessusersRequests withBusinessUserInputModel1(openapisdk.models.shared.BusinessUserInputModel businessUserInputModel1) {
        this.businessUserInputModel1 = businessUserInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.BusinessUserInputModel businessUserInputModel2;
    public PostSetupV1BusinessusersRequests withBusinessUserInputModel2(openapisdk.models.shared.BusinessUserInputModel businessUserInputModel2) {
        this.businessUserInputModel2 = businessUserInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.BusinessUserInputModel businessUserInputModel3;
    public PostSetupV1BusinessusersRequests withBusinessUserInputModel3(openapisdk.models.shared.BusinessUserInputModel businessUserInputModel3) {
        this.businessUserInputModel3 = businessUserInputModel3;
        return this;
    }
}
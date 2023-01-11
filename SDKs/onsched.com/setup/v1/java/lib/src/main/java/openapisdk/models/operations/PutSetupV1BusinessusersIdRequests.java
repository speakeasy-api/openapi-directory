package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1BusinessusersIdRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.BusinessUserUpdateModel businessUserUpdateModel;
    public PutSetupV1BusinessusersIdRequests withBusinessUserUpdateModel(openapisdk.models.shared.BusinessUserUpdateModel businessUserUpdateModel) {
        this.businessUserUpdateModel = businessUserUpdateModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BusinessUserUpdateModel businessUserUpdateModel1;
    public PutSetupV1BusinessusersIdRequests withBusinessUserUpdateModel1(openapisdk.models.shared.BusinessUserUpdateModel businessUserUpdateModel1) {
        this.businessUserUpdateModel1 = businessUserUpdateModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.BusinessUserUpdateModel businessUserUpdateModel2;
    public PutSetupV1BusinessusersIdRequests withBusinessUserUpdateModel2(openapisdk.models.shared.BusinessUserUpdateModel businessUserUpdateModel2) {
        this.businessUserUpdateModel2 = businessUserUpdateModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.BusinessUserUpdateModel businessUserUpdateModel3;
    public PutSetupV1BusinessusersIdRequests withBusinessUserUpdateModel3(openapisdk.models.shared.BusinessUserUpdateModel businessUserUpdateModel3) {
        this.businessUserUpdateModel3 = businessUserUpdateModel3;
        return this;
    }
}
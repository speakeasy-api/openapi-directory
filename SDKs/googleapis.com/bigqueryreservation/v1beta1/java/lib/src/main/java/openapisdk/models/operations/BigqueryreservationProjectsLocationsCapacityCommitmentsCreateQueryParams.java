package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=capacityCommitmentId")
    public String capacityCommitmentId;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams withCapacityCommitmentId(String capacityCommitmentId) {
        this.capacityCommitmentId = capacityCommitmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=enforceSingleAdminProjectPerOrg")
    public Boolean enforceSingleAdminProjectPerOrg;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams withEnforceSingleAdminProjectPerOrg(Boolean enforceSingleAdminProjectPerOrg) {
        this.enforceSingleAdminProjectPerOrg = enforceSingleAdminProjectPerOrg;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}
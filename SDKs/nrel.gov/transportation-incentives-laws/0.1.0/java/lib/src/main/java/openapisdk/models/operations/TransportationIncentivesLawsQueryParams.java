package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransportationIncentivesLawsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public TransportationIncentivesLawsQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expired")
    public Boolean expired;
    public TransportationIncentivesLawsQueryParams withExpired(Boolean expired) {
        this.expired = expired;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=incentive_type")
    public String incentiveType;
    public TransportationIncentivesLawsQueryParams withIncentiveType(String incentiveType) {
        this.incentiveType = incentiveType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jurisdiction")
    public String jurisdiction;
    public TransportationIncentivesLawsQueryParams withJurisdiction(String jurisdiction) {
        this.jurisdiction = jurisdiction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyword")
    public String keyword;
    public TransportationIncentivesLawsQueryParams withKeyword(String keyword) {
        this.keyword = keyword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=law_type")
    public String lawType;
    public TransportationIncentivesLawsQueryParams withLawType(String lawType) {
        this.lawType = lawType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public TransportationIncentivesLawsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=local")
    public Boolean local;
    public TransportationIncentivesLawsQueryParams withLocal(Boolean local) {
        this.local = local;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=poc")
    public Boolean poc;
    public TransportationIncentivesLawsQueryParams withPoc(Boolean poc) {
        this.poc = poc;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recent")
    public Boolean recent;
    public TransportationIncentivesLawsQueryParams withRecent(Boolean recent) {
        this.recent = recent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regulation_type")
    public String regulationType;
    public TransportationIncentivesLawsQueryParams withRegulationType(String regulationType) {
        this.regulationType = regulationType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=technology")
    public String technology;
    public TransportationIncentivesLawsQueryParams withTechnology(String technology) {
        this.technology = technology;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user_type")
    public String userType;
    public TransportationIncentivesLawsQueryParams withUserType(String userType) {
        this.userType = userType;
        return this;
    }
}
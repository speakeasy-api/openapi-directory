package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JurisdictionListJurisdictionsGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apikey")
    public String apikey;
    public JurisdictionListJurisdictionsGetQueryParams withApikey(String apikey) {
        this.apikey = apikey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=classification")
    public openapisdk.models.shared.JurisdictionClassificationEnum classification;
    public JurisdictionListJurisdictionsGetQueryParams withClassification(openapisdk.models.shared.JurisdictionClassificationEnum classification) {
        this.classification = classification;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public openapisdk.models.shared.JurisdictionIncludeEnum[] include;
    public JurisdictionListJurisdictionsGetQueryParams withInclude(openapisdk.models.shared.JurisdictionIncludeEnum[] include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public JurisdictionListJurisdictionsGetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public JurisdictionListJurisdictionsGetQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}
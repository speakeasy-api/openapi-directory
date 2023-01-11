package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCertificatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=label_selector")
    public String labelSelector;
    public GetCertificatesQueryParams withLabelSelector(String labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetCertificatesQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetCertificatesSortEnum sort;
    public GetCertificatesQueryParams withSort(GetCertificatesSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetCertificatesTypeParameterTypeEnum type;
    public GetCertificatesQueryParams withType(GetCertificatesTypeParameterTypeEnum type) {
        this.type = type;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=classificationType")
    public CreateProjectClassificationTypeEnum classificationType;
    public CreateProjectQueryParams withClassificationType(CreateProjectClassificationTypeEnum classificationType) {
        this.classificationType = classificationType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public CreateProjectQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=domainId")
    public String domainId;
    public CreateProjectQueryParams withDomainId(String domainId) {
        this.domainId = domainId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public CreateProjectQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}
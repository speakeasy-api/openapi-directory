package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationNetworksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=configTemplateId")
    public String configTemplateId;
    public GetOrganizationNetworksQueryParams withConfigTemplateId(String configTemplateId) {
        this.configTemplateId = configTemplateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endingBefore")
    public String endingBefore;
    public GetOrganizationNetworksQueryParams withEndingBefore(String endingBefore) {
        this.endingBefore = endingBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=perPage")
    public Long perPage;
    public GetOrganizationNetworksQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startingAfter")
    public String startingAfter;
    public GetOrganizationNetworksQueryParams withStartingAfter(String startingAfter) {
        this.startingAfter = startingAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=tags")
    public String[] tags;
    public GetOrganizationNetworksQueryParams withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagsFilterType")
    public GetOrganizationNetworksTagsFilterTypeEnum tagsFilterType;
    public GetOrganizationNetworksQueryParams withTagsFilterType(GetOrganizationNetworksTagsFilterTypeEnum tagsFilterType) {
        this.tagsFilterType = tagsFilterType;
        return this;
    }
}
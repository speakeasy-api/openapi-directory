package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesTagsFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=max")
    public Integer max;
    public GetResourcesTagsFormatQueryParams withMax(Integer max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=mediaId")
    public Long mediaId;
    public GetResourcesTagsFormatQueryParams withMediaId(Long mediaId) {
        this.mediaId = mediaId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=name")
    public String name;
    public GetResourcesTagsFormatQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=nameContains")
    public String nameContains;
    public GetResourcesTagsFormatQueryParams withNameContains(String nameContains) {
        this.nameContains = nameContains;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=offset")
    public Integer offset;
    public GetResourcesTagsFormatQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=sort")
    public String sort;
    public GetResourcesTagsFormatQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=typeId")
    public Long typeId;
    public GetResourcesTagsFormatQueryParams withTypeId(Long typeId) {
        this.typeId = typeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=typeName")
    public String typeName;
    public GetResourcesTagsFormatQueryParams withTypeName(String typeName) {
        this.typeName = typeName;
        return this;
    }
}
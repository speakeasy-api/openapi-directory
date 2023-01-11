package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVolumesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=label_selector")
    public String labelSelector;
    public GetVolumesQueryParams withLabelSelector(String labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetVolumesQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetVolumesSortEnum sort;
    public GetVolumesQueryParams withSort(GetVolumesSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetVolumesStatusEnum status;
    public GetVolumesQueryParams withStatus(GetVolumesStatusEnum status) {
        this.status = status;
        return this;
    }
}
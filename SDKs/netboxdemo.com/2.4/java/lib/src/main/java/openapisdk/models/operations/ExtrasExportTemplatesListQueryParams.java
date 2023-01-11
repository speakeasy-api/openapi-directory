package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasExportTemplatesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=content_type")
    public String contentType;
    public ExtrasExportTemplatesListQueryParams withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ExtrasExportTemplatesListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public ExtrasExportTemplatesListQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ExtrasExportTemplatesListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}
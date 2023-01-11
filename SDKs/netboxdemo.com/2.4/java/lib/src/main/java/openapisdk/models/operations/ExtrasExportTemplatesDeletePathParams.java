package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasExportTemplatesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public ExtrasExportTemplatesDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}
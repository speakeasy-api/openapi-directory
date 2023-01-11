package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasExportTemplatesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public ExtrasExportTemplatesReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}
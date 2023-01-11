package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLabelByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=label_download_type")
    public openapisdk.models.shared.LabelDownloadTypeEnum labelDownloadType;
    public GetLabelByIdQueryParams withLabelDownloadType(openapisdk.models.shared.LabelDownloadTypeEnum labelDownloadType) {
        this.labelDownloadType = labelDownloadType;
        return this;
    }
}
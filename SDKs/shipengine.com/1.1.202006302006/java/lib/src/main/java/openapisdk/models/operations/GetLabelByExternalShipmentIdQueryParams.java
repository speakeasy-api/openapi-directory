package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLabelByExternalShipmentIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=label_download_type")
    public openapisdk.models.shared.LabelDownloadTypeEnum labelDownloadType;
    public GetLabelByExternalShipmentIdQueryParams withLabelDownloadType(openapisdk.models.shared.LabelDownloadTypeEnum labelDownloadType) {
        this.labelDownloadType = labelDownloadType;
        return this;
    }
}
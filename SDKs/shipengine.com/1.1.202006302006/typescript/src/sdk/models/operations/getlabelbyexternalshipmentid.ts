import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLabelByExternalShipmentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_shipment_id" })
  externalShipmentId: string;
}


export class GetLabelByExternalShipmentIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label_download_type" })
  labelDownloadType?: shared.LabelDownloadTypeEnum;
}


export class GetLabelByExternalShipmentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLabelByExternalShipmentIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetLabelByExternalShipmentIdQueryParams;
}


export class GetLabelByExternalShipmentIdResponseOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  getLabelByExternalShipmentIdResponseBody?: shared.GetLabelByExternalShipmentIdResponseBodyOutput;
}

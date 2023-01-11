import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCarrierSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=carrier_id" })
  carrierId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=carrier_name" })
  carrierName: shared.CarrierNameWithSettingsEnum;
}


export class GetCarrierSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCarrierSettingsPathParams;
}


export class GetCarrierSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  getCarrierSettingsResponseBody?: any;
}

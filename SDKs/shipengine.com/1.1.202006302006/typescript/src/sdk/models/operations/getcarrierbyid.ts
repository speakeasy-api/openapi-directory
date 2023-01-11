import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCarrierByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=carrier_id" })
  carrierId: string;
}


export class GetCarrierByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCarrierByIdPathParams;
}


export class GetCarrierByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  getCarrierByIdResponseBody?: shared.GetCarrierByIdResponseBody;
}

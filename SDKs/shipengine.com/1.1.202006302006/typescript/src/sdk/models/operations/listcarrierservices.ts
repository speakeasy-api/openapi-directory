import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListCarrierServicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=carrier_id" })
  carrierId: string;
}


export class ListCarrierServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListCarrierServicesPathParams;
}


export class ListCarrierServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  listCarrierServicesResponseBody?: shared.ListCarrierServicesResponseBody;
}

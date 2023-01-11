import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListCarrierPackageTypesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=carrier_id" })
  carrierId: string;
}


export class ListCarrierPackageTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListCarrierPackageTypesPathParams;
}


export class ListCarrierPackageTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  listCarrierPackageTypesResponseBody?: shared.ListCarrierPackageTypesResponseBody;
}

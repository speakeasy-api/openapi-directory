import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWarehouseByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=warehouse_id" })
  warehouseId: string;
}


export class GetWarehouseByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWarehouseByIdPathParams;
}


export class GetWarehouseByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  getWarehouseByIdResponseBody?: shared.GetWarehouseByIdResponseBody;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteWarehousePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=warehouse_id" })
  warehouseId: string;
}


export class DeleteWarehouseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteWarehousePathParams;
}


export class DeleteWarehouseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  emptyResponseBody?: string;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}

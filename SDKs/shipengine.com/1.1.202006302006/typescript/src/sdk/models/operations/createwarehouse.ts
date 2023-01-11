import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateWarehouseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateWarehouseRequestBodyInput;
}


export class CreateWarehouseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createWarehouseResponseBody?: shared.CreateWarehouseResponseBody;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}

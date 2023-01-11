import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRateByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rate_id" })
  rateId: string;
}


export class GetRateByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRateByIdPathParams;
}


export class GetRateByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  getRateByIdResponseBody?: shared.GetRateByIdResponseBody;
}

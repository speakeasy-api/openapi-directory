import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CalculateRatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CalculateRatesRequestBody;
}


export class CalculateRatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  calculateRatesResponseBody?: shared.CalculateRatesResponseBody;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}

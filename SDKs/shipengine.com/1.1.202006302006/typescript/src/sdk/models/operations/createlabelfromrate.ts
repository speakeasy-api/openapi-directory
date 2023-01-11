import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateLabelFromRatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rate_id" })
  rateId: string;
}


export class CreateLabelFromRateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateLabelFromRatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateLabelFromRateRequestBody;
}


export class CreateLabelFromRateResponseOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createLabelFromRateResponseBody?: shared.CreateLabelFromRateResponseBodyOutput;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateReturnLabelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=label_id" })
  labelId: string;
}


export class CreateReturnLabelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateReturnLabelPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateReturnLabelRequestBody;
}


export class CreateReturnLabelResponseOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createReturnLabelResponseBody?: shared.CreateReturnLabelResponseBodyOutput;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}

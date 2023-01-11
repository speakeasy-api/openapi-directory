import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VoidLabelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=label_id" })
  labelId: string;
}


export class VoidLabelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VoidLabelPathParams;
}


export class VoidLabelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  voidLabelResponseBody?: shared.VoidLabelResponseBody;
}

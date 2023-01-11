import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTrackingLogFromLabelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=label_id" })
  labelId: string;
}


export class GetTrackingLogFromLabelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTrackingLogFromLabelPathParams;
}


export class GetTrackingLogFromLabelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  getTrackingLogFromLabelResponseBody?: shared.GetTrackingLogFromLabelResponseBody;
}

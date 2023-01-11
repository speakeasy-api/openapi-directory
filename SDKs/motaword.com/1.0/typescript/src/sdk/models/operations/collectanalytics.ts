import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CollectAnalyticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CollectAnalyticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectAnalyticsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.AnalyticsCollection;
}


export class CollectAnalyticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  operationStatus?: shared.OperationStatus;

  @SpeakeasyMetadata()
  statusCode: number;
}

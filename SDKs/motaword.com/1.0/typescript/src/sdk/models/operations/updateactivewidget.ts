import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateActiveWidgetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=widgetId" })
  widgetId: number;
}


export class UpdateActiveWidgetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateActiveWidgetPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ActiveWidget;
}


export class UpdateActiveWidgetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activeWidget?: shared.ActiveWidget;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}

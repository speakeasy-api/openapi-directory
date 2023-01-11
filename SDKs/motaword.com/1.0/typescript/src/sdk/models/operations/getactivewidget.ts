import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetActiveWidgetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=widgetId" })
  widgetId: number;
}


export class GetActiveWidgetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetActiveWidgetPathParams;
}


export class GetActiveWidgetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activeWidget?: shared.ActiveWidget;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}

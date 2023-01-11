import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateActiveWidgetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}


export class CreateActiveWidgetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateActiveWidgetPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ActiveWidget;
}


export class CreateActiveWidgetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activeWidget?: shared.ActiveWidget;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetActiveWidgetsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}


export class GetActiveWidgetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetActiveWidgetsPathParams;
}


export class GetActiveWidgetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activeWidgetList?: shared.ActiveWidgetList;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}

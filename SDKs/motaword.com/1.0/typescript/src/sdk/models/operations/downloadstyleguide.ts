import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DownloadStyleGuidePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=styleGuideId" })
  styleGuideId: number;
}


export class DownloadStyleGuideRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadStyleGuidePathParams;
}


export class DownloadStyleGuideResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  downloadStyleGuide200ApplicationJSONString?: string;
}

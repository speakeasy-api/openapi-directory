import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DownloadVideosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DownloadVideosSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class DownloadVideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadVideosPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RedownloadVideo;

  @SpeakeasyMetadata()
  security: DownloadVideosSecurity;
}


export class DownloadVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  url?: shared.Url;
}

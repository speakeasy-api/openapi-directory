import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DownloadImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DownloadImageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class DownloadImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadImagePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RedownloadImage;

  @SpeakeasyMetadata()
  security: DownloadImageSecurity;
}


export class DownloadImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  url?: shared.Url;
}

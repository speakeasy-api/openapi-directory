import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebpushFcmOptions } from "./webpushfcmoptions";



// WebpushConfig
/** 
 * [Webpush protocol](https://tools.ietf.org/html/rfc8030) options.
**/
export class WebpushConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=fcmOptions" })
  fcmOptions?: WebpushFcmOptions;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification?: Record<string, any>;
}

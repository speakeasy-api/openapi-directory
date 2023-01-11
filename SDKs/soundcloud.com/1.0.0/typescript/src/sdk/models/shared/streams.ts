import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Streams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hls_mp3_128_url" })
  hlsMp3128Url?: string;

  @SpeakeasyMetadata({ data: "json, name=hls_opus_64_url" })
  hlsOpus64Url?: string;

  @SpeakeasyMetadata({ data: "json, name=http_mp3_128_url" })
  httpMp3128Url?: string;

  @SpeakeasyMetadata({ data: "json, name=preview_mp3_128_url" })
  previewMp3128Url?: string;
}

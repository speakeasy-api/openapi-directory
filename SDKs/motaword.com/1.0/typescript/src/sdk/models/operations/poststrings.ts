import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostStringsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents" })
  contents?: string[];

  @SpeakeasyMetadata({ data: "json, name=source_language" })
  sourceLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=target_languages" })
  targetLanguages?: string[];
}


export class PostStringsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostStringsRequestBody;
}


export class PostStringsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  machineTranslatedStrings?: shared.MachineTranslatedStrings;

  @SpeakeasyMetadata()
  statusCode: number;
}

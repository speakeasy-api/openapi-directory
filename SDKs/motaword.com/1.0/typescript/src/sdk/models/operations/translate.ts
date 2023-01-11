import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TranslatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetLanguage" })
  targetLanguage: string;
}


export class TranslateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents" })
  contents?: string[];

  @SpeakeasyMetadata({ data: "json, name=documents", elemType: shared.FileAsData })
  documents?: shared.FileAsData[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;
}


export class Translate200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: any;
}


export class TranslateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TranslatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TranslateRequestBody;
}


export class TranslateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  translate200ApplicationJSONObject?: Translate200ApplicationJson;
}

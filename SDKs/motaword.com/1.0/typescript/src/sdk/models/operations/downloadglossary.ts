import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DownloadGlossaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=glossaryId" })
  glossaryId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}


export class DownloadGlossaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadGlossaryPathParams;
}


export class DownloadGlossaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  downloadGlossary200ApplicationJSONString?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RegeneratePreviewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=documentId" })
  documentId: number;
}


export class RegeneratePreviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegeneratePreviewPathParams;
}


export class RegeneratePreviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  regeneratePreviewResponse?: shared.RegeneratePreviewResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

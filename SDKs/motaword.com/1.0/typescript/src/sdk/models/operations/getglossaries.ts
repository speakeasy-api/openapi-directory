import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGlossariesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}


export class GetGlossariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGlossariesPathParams;
}


export class GetGlossariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  glossaryList?: shared.GlossaryList;

  @SpeakeasyMetadata()
  statusCode: number;
}

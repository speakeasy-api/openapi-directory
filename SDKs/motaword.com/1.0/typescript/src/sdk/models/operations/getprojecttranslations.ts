import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectTranslationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}


export class GetProjectTranslationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectTranslationsPathParams;
}


export class GetProjectTranslationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  stringList?: shared.StringList;
}

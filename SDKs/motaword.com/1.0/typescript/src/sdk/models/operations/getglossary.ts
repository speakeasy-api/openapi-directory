import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGlossaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=glossaryId" })
  glossaryId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}


export class GetGlossaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGlossaryPathParams;
}


export class GetGlossaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  glossary?: shared.Glossary;

  @SpeakeasyMetadata()
  statusCode: number;
}

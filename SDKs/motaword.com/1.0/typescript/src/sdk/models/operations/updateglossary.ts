import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGlossaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=glossaryId" })
  glossaryId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}


export class UpdateGlossaryRequestBodyGlossaries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=glossaries" })
  glossaries: string;
}


export class UpdateGlossaryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  glossaries: UpdateGlossaryRequestBodyGlossaries;
}


export class UpdateGlossaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGlossaryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: UpdateGlossaryRequestBody;
}


export class UpdateGlossaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  glossary?: shared.Glossary;

  @SpeakeasyMetadata()
  statusCode: number;
}

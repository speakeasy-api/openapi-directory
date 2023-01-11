import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateGlossaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}


export class CreateGlossaryRequestBodyGlossaries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=glossaries" })
  glossaries: string;
}


export class CreateGlossaryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  glossaries: CreateGlossaryRequestBodyGlossaries;
}


export class CreateGlossaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateGlossaryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: CreateGlossaryRequestBody;
}


export class CreateGlossaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  glossary?: shared.Glossary;

  @SpeakeasyMetadata()
  statusCode: number;
}

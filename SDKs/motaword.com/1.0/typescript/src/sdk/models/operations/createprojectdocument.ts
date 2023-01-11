import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateProjectDocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}


export class CreateProjectDocumentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=documents[];json=true" })
  documents?: Uint8Array[];

  @SpeakeasyMetadata({ data: "multipart_form, name=schemes[]" })
  schemes?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=source-links[];json=true", elemType: shared.LinkedSourceDocument })
  sourceLinks?: shared.LinkedSourceDocument[];
}


export class CreateProjectDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateProjectDocumentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: CreateProjectDocumentRequestBody;
}


export class CreateProjectDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  documentList?: shared.DocumentList;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}

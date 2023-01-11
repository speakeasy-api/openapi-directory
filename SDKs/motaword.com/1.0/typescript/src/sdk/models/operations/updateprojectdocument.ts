import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateProjectDocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=documentId" })
  documentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}


export class UpdateProjectDocumentRequestBodyDocuments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=documents" })
  documents: string;
}


export class UpdateProjectDocumentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  documents?: UpdateProjectDocumentRequestBodyDocuments;

  @SpeakeasyMetadata({ data: "multipart_form, name=schemes" })
  schemes?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=source-link;json=true" })
  sourceLink?: shared.LinkedSourceDocument;
}


export class UpdateProjectDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateProjectDocumentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: UpdateProjectDocumentRequestBody;
}


export class UpdateProjectDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  document?: shared.Document;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}

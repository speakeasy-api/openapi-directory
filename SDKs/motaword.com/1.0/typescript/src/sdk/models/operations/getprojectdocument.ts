import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectDocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=documentId" })
  documentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}

export enum GetProjectDocumentWithEnum {
    Preview = "preview",
    Editors = "editors"
}


export class GetProjectDocumentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with[]" })
  with?: GetProjectDocumentWithEnum[];
}


export class GetProjectDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectDocumentPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectDocumentQueryParams;
}


export class GetProjectDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  document?: shared.Document;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectDocumentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}

export enum GetProjectDocumentsWithEnum {
    Preview = "preview",
    Editors = "editors"
}


export class GetProjectDocumentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with[]" })
  with?: GetProjectDocumentsWithEnum[];
}


export class GetProjectDocumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectDocumentsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectDocumentsQueryParams;
}


export class GetProjectDocumentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  documentList?: shared.DocumentList;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}

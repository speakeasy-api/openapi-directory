import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSimilarDocumentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=documentId" })
  documentId: number;
}

export enum GetSimilarDocumentsWithEnum {
    Preview = "preview",
    Editors = "editors"
}


export class GetSimilarDocumentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with[]" })
  with?: GetSimilarDocumentsWithEnum[];
}


export class GetSimilarDocumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSimilarDocumentsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSimilarDocumentsQueryParams;
}


export class GetSimilarDocumentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  documentList?: shared.DocumentList;

  @SpeakeasyMetadata()
  statusCode: number;
}

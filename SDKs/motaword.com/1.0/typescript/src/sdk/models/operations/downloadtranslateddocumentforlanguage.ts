import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DownloadTranslatedDocumentForLanguagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=documentId" })
  documentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}


export class DownloadTranslatedDocumentForLanguageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=certified" })
  certified?: boolean;
}


export class DownloadTranslatedDocumentForLanguageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadTranslatedDocumentForLanguagePathParams;

  @SpeakeasyMetadata()
  queryParams: DownloadTranslatedDocumentForLanguageQueryParams;
}


export class DownloadTranslatedDocumentForLanguageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  downloadTranslatedDocumentForLanguage200ApplicationOctetStreamBinaryString?: Uint8Array;
}

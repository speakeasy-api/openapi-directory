import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackageProjectTranslationMemoryForLanguagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=languageCode" })
  languageCode: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}


export class PackageProjectTranslationMemoryForLanguageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=async" })
  async?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: string;
}


export class PackageProjectTranslationMemoryForLanguageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackageProjectTranslationMemoryForLanguagePathParams;

  @SpeakeasyMetadata()
  queryParams: PackageProjectTranslationMemoryForLanguageQueryParams;
}


export class PackageProjectTranslationMemoryForLanguageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  asyncOperationStatus?: shared.AsyncOperationStatus;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  packageProjectTranslationMemoryForLanguage200ApplicationXMLBinaryString?: Uint8Array;
}

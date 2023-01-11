import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackageProjectTranslationMemoryForLanguageStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=languageCode" })
  languageCode: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}


export class PackageProjectTranslationMemoryForLanguageStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=async_request_key" })
  asyncRequestKey: string;
}


export class PackageProjectTranslationMemoryForLanguageStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackageProjectTranslationMemoryForLanguageStatusPathParams;

  @SpeakeasyMetadata()
  queryParams: PackageProjectTranslationMemoryForLanguageStatusQueryParams;
}


export class PackageProjectTranslationMemoryForLanguageStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  asyncOperationStatus?: shared.AsyncOperationStatus;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

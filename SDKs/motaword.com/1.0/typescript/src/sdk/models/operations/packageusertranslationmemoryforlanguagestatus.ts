import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackageUserTranslationMemoryForLanguageStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=languageCode" })
  languageCode: string;
}


export class PackageUserTranslationMemoryForLanguageStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=async_request_key" })
  asyncRequestKey: string;
}


export class PackageUserTranslationMemoryForLanguageStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackageUserTranslationMemoryForLanguageStatusPathParams;

  @SpeakeasyMetadata()
  queryParams: PackageUserTranslationMemoryForLanguageStatusQueryParams;
}


export class PackageUserTranslationMemoryForLanguageStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  asyncOperationStatus?: shared.AsyncOperationStatus;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

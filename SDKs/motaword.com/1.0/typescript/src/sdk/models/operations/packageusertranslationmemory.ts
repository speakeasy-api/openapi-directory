import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackageUserTranslationMemoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=languageCode" })
  languageCode: string;
}


export class PackageUserTranslationMemoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=async" })
  async?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: number;
}


export class PackageUserTranslationMemoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackageUserTranslationMemoryPathParams;

  @SpeakeasyMetadata()
  queryParams: PackageUserTranslationMemoryQueryParams;
}


export class PackageUserTranslationMemoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  asyncOperationStatus?: shared.AsyncOperationStatus;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  packageUserTranslationMemory200ApplicationXMLBinaryString?: Uint8Array;
}

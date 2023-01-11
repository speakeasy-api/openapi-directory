import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackageLanguagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;
}


export class PackageLanguageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=async" })
  async?: number;
}


export class PackageLanguageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackageLanguagePathParams;

  @SpeakeasyMetadata()
  queryParams: PackageLanguageQueryParams;
}


export class PackageLanguageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  package?: shared.Package;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  packageLanguage200ApplicationOctetStreamBinaryString?: Uint8Array;
}

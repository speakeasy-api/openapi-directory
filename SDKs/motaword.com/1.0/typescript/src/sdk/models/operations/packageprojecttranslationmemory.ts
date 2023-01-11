import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackageProjectTranslationMemoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}


export class PackageProjectTranslationMemoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=async" })
  async?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: string;
}


export class PackageProjectTranslationMemoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackageProjectTranslationMemoryPathParams;

  @SpeakeasyMetadata()
  queryParams: PackageProjectTranslationMemoryQueryParams;
}


export class PackageProjectTranslationMemoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  asyncOperationStatus?: shared.AsyncOperationStatus;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  packageProjectTranslationMemory200ApplicationXMLBinaryString?: Uint8Array;
}

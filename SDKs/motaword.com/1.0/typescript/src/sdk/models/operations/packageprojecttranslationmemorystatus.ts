import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackageProjectTranslationMemoryStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}


export class PackageProjectTranslationMemoryStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=async_request_key" })
  asyncRequestKey: string;
}


export class PackageProjectTranslationMemoryStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackageProjectTranslationMemoryStatusPathParams;

  @SpeakeasyMetadata()
  queryParams: PackageProjectTranslationMemoryStatusQueryParams;
}


export class PackageProjectTranslationMemoryStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  asyncOperationStatus?: shared.AsyncOperationStatus;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

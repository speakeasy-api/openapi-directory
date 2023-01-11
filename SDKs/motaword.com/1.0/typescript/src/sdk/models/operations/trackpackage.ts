import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TrackPackagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class TrackPackageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;
}


export class TrackPackageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TrackPackagePathParams;

  @SpeakeasyMetadata()
  queryParams: TrackPackageQueryParams;
}


export class TrackPackageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  packageStatus?: shared.PackageStatus;

  @SpeakeasyMetadata()
  statusCode: number;
}

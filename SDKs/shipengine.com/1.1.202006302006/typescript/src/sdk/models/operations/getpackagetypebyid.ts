import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPackageTypeByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_id" })
  packageId: string;
}


export class GetPackageTypeByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPackageTypeByIdPathParams;
}


export class GetPackageTypeByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  getPackageTypeByIdResponseBody?: shared.GetPackageTypeByIdResponseBody;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAvailableCorporatePermissionsByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=corporateId" })
  corporateId: number;
}


export class GetAvailableCorporatePermissionsByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAvailableCorporatePermissionsByIdPathParams;
}


export class GetAvailableCorporatePermissionsByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  permissionList?: shared.PermissionList;

  @SpeakeasyMetadata()
  statusCode: number;
}

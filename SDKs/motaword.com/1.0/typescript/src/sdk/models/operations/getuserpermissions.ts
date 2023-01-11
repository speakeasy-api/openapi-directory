import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserPermissionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetUserPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserPermissionsPathParams;
}


export class GetUserPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  permissionList?: shared.PermissionList;

  @SpeakeasyMetadata()
  statusCode: number;
}

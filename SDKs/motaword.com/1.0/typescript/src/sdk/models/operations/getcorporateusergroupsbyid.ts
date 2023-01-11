import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCorporateUserGroupsByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=corporateId" })
  corporateId: number;
}


export class GetCorporateUserGroupsByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCorporateUserGroupsByIdPathParams;
}


export class GetCorporateUserGroupsByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userGroupList?: shared.UserGroupList;
}

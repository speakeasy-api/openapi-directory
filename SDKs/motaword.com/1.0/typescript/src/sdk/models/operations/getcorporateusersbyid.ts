import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCorporateUsersByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=corporateId" })
  corporateId: number;
}


export class GetCorporateUsersByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCorporateUsersByIdPathParams;
}


export class GetCorporateUsersByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userList?: shared.UserList;
}

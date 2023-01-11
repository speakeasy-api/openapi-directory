import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SaveCorporateUserGroupByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=corporateId" })
  corporateId: number;
}


export class SaveCorporateUserGroupByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SaveCorporateUserGroupByIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UserGroup;
}


export class SaveCorporateUserGroupByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userGroup?: shared.UserGroup;
}

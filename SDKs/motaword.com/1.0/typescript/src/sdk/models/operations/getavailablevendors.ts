import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetAvailableVendorsWithEnum {
    User = "user"
}


export class GetAvailableVendorsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with[]" })
  with?: GetAvailableVendorsWithEnum[];
}


export class GetAvailableVendorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAvailableVendorsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.AvailableVendorsFilter;
}


export class GetAvailableVendorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userList?: shared.UserList;
}

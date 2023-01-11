import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetImageListViewEnum {
    Minimal = "minimal",
    Full = "full"
}


export class GetImageListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetImageListViewEnum;
}


export class GetImageListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetImageListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetImageListQueryParams;

  @SpeakeasyMetadata()
  security: GetImageListSecurity;
}


export class GetImageListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageDataList?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

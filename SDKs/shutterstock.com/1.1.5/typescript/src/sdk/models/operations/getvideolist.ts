import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetVideoListViewEnum {
    Minimal = "minimal",
    Full = "full"
}


export class GetVideoListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetVideoListViewEnum;
}


export class GetVideoListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetVideoListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVideoListQueryParams;

  @SpeakeasyMetadata()
  security: GetVideoListSecurity;
}


export class GetVideoListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoDataList?: any;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetTrackListViewEnum {
    Minimal = "minimal",
    Full = "full"
}


export class GetTrackListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetTrackListViewEnum;
}


export class GetTrackListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetTrackListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTrackListQueryParams;

  @SpeakeasyMetadata()
  security: GetTrackListSecurity;
}


export class GetTrackListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  audioDataList?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

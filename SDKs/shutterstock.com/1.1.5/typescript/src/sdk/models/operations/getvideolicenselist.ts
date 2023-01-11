import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetVideoLicenseListSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}


export class GetVideoLicenseListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVideoLicenseListSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=video_id" })
  videoId?: string;
}


export class GetVideoLicenseListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class GetVideoLicenseListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVideoLicenseListQueryParams;

  @SpeakeasyMetadata()
  security: GetVideoLicenseListSecurity;
}


export class GetVideoLicenseListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  downloadHistoryDataList?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

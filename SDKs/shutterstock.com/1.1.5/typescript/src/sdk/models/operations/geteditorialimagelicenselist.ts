import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetEditorialImageLicenseListSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}


export class GetEditorialImageLicenseListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_id" })
  imageId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetEditorialImageLicenseListSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;
}


export class GetEditorialImageLicenseListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class GetEditorialImageLicenseListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEditorialImageLicenseListQueryParams;

  @SpeakeasyMetadata()
  security: GetEditorialImageLicenseListSecurity;
}


export class GetEditorialImageLicenseListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  downloadHistoryDataList?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

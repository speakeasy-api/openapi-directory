import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetUpdatedEditorialImagesSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}

export enum GetUpdatedEditorialImagesTypeEnum {
    Edit = "edit",
    Addition = "addition"
}


export class GetUpdatedEditorialImagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_taken_end" })
  dateTakenEnd?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_taken_start" })
  dateTakenStart?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_updated_end" })
  dateUpdatedEnd: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_updated_start" })
  dateUpdatedStart: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUpdatedEditorialImagesSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supplier_code" })
  supplierCode?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: GetUpdatedEditorialImagesTypeEnum;
}


export class GetUpdatedEditorialImagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetUpdatedEditorialImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpdatedEditorialImagesQueryParams;

  @SpeakeasyMetadata()
  security: GetUpdatedEditorialImagesSecurity;
}


export class GetUpdatedEditorialImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  editorialUpdatedResults?: shared.EditorialUpdatedResults;

  @SpeakeasyMetadata()
  statusCode: number;
}

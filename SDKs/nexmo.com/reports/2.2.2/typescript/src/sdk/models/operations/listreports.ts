import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListReportsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_from" })
  dateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_to" })
  dateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status: string;
}


export class ListReportsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class ListReports200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items_count" })
  itemsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=reports" })
  reports?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=self_link" })
  selfLink?: string;
}


export class ListReportsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListReportsQueryParams;

  @SpeakeasyMetadata()
  security: ListReportsSecurity;
}


export class ListReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listReports200ApplicationJSONObject?: ListReports200ApplicationJson;

  @SpeakeasyMetadata()
  listReports400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  listReports401ApplicationJSONAny?: any;
}

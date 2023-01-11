import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTargetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ordering" })
  ordering?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetTargets200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_total" })
  pageTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=pagination_count" })
  paginationCount?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Target })
  results?: shared.Target[];
}


export class GetTargets401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargets404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargets500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTargetsQueryParams;
}


export class GetTargetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargets200ApplicationJSONObject?: GetTargets200ApplicationJson;

  @SpeakeasyMetadata()
  getTargets401ApplicationJSONObject?: GetTargets401ApplicationJson;

  @SpeakeasyMetadata()
  getTargets404ApplicationJSONObject?: GetTargets404ApplicationJson;

  @SpeakeasyMetadata()
  getTargets500ApplicationJSONObject?: GetTargets500ApplicationJson;
}

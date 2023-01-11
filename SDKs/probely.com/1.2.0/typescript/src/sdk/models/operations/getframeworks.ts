import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFrameworksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ordering" })
  ordering?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetFrameworks200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_total" })
  pageTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Framework })
  results?: shared.Framework[];
}


export class GetFrameworks401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetFrameworksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFrameworksQueryParams;
}


export class GetFrameworksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getFrameworks200ApplicationJSONObject?: GetFrameworks200ApplicationJson;

  @SpeakeasyMetadata()
  getFrameworks401ApplicationJSONObject?: GetFrameworks401ApplicationJson;
}

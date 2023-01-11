import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTargetsTargetIdScansRetrievePagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdScansRetrievePageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: number;
}


export class GetTargetsTargetIdScansRetrievePage200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;
}


export class GetTargetsTargetIdScansRetrievePage400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}


export class GetTargetsTargetIdScansRetrievePage401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdScansRetrievePage404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdScansRetrievePageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdScansRetrievePagePathParams;

  @SpeakeasyMetadata()
  queryParams: GetTargetsTargetIdScansRetrievePageQueryParams;
}


export class GetTargetsTargetIdScansRetrievePageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansRetrievePage200ApplicationJSONObject?: GetTargetsTargetIdScansRetrievePage200ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansRetrievePage400ApplicationJSONObject?: GetTargetsTargetIdScansRetrievePage400ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansRetrievePage401ApplicationJSONObject?: GetTargetsTargetIdScansRetrievePage401ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansRetrievePage404ApplicationJSONObject?: GetTargetsTargetIdScansRetrievePage404ApplicationJson;
}

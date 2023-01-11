import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFrameworksIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetFrameworksId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetFrameworksId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetFrameworksIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFrameworksIdPathParams;
}


export class GetFrameworksIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  framework?: shared.Framework;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getFrameworksId401ApplicationJSONObject?: GetFrameworksId401ApplicationJson;

  @SpeakeasyMetadata()
  getFrameworksId404ApplicationJSONObject?: GetFrameworksId404ApplicationJson;
}

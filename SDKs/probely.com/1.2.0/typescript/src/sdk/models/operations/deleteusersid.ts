import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteUsersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteUsersId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class DeleteUsersId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class DeleteUsersId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class DeleteUsersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUsersIdPathParams;
}


export class DeleteUsersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteUsersId401ApplicationJSONObject?: DeleteUsersId401ApplicationJson;

  @SpeakeasyMetadata()
  deleteUsersId403ApplicationJSONObject?: DeleteUsersId403ApplicationJson;

  @SpeakeasyMetadata()
  deleteUsersId404ApplicationJSONObject?: DeleteUsersId404ApplicationJson;
}

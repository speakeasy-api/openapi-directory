import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMeConnectionsConnectionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connection_id" })
  connectionId: number;
}


export class GetMeConnectionsConnectionIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;
}


export class GetMeConnectionsConnectionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMeConnectionsConnectionIdPathParams;

  @SpeakeasyMetadata()
  security: GetMeConnectionsConnectionIdSecurity;
}


export class GetMeConnectionsConnectionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connection?: shared.Connection;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}

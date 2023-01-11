import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetClientProfileForPamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: number;
}


export class GetClientProfileForPamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetClientProfileForPamPathParams;
}


export class GetClientProfileForPamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientProfile?: shared.ClientProfile;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}

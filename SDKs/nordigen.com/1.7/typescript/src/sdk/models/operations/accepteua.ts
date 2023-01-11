import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AcceptEuaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AcceptEuaRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  enduserAcceptanceDetails?: shared.EnduserAcceptanceDetails;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  enduserAcceptanceDetails1?: shared.EnduserAcceptanceDetails;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  enduserAcceptanceDetails2?: shared.EnduserAcceptanceDetails;
}


export class AcceptEuaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AcceptEuaPathParams;

  @SpeakeasyMetadata()
  request: AcceptEuaRequests;
}


export class AcceptEuaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  endUserAgreement?: shared.EndUserAgreement;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RejectVendorApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class RejectVendorApplicationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  mwoAuth: shared.SchemeMwoAuth;
}


export class RejectVendorApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RejectVendorApplicationPathParams;

  @SpeakeasyMetadata()
  security: RejectVendorApplicationSecurity;
}


export class RejectVendorApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  operationStatus?: shared.OperationStatus;

  @SpeakeasyMetadata()
  statusCode: number;
}

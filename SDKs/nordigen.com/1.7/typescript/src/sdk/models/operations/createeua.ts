import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateEuaRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  endUserAgreement?: shared.EndUserAgreementInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  endUserAgreement1?: shared.EndUserAgreementInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  endUserAgreement2?: shared.EndUserAgreementInput;
}


export class CreateEuaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: CreateEuaRequestsInput;
}


export class CreateEuaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  endUserAgreement?: shared.EndUserAgreement;

  @SpeakeasyMetadata()
  statusCode: number;
}

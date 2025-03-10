import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const DeleteSupportingDocumentServerList = [
	"https://numbers.twilio.com",
] as const;


export class DeleteSupportingDocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class DeleteSupportingDocumentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteSupportingDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverURL?: string;

  @SpeakeasyMetadata()
  pathParams: DeleteSupportingDocumentPathParams;

  @SpeakeasyMetadata()
  security: DeleteSupportingDocumentSecurity;
}


export class DeleteSupportingDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

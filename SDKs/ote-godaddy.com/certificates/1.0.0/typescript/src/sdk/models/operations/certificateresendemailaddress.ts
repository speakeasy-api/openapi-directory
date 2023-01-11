import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateResendEmailAddressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=emailAddress" })
  emailAddress: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=emailId" })
  emailId: string;
}


export class CertificateResendEmailAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CertificateResendEmailAddressPathParams;
}


export class CertificateResendEmailAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

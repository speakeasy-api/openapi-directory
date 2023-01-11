import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateAlternateEmailAddressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=emailAddress" })
  emailAddress: string;
}


export class CertificateAlternateEmailAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CertificateAlternateEmailAddressPathParams;
}


export class CertificateAlternateEmailAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateEmailHistory?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

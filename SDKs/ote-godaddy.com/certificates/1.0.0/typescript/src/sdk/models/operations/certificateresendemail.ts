import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateResendEmailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=emailId" })
  emailId: string;
}


export class CertificateResendEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CertificateResendEmailPathParams;
}


export class CertificateResendEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

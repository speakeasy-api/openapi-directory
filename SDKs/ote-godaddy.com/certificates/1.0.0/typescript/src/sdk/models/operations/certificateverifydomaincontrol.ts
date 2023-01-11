import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateVerifydomaincontrolPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;
}


export class CertificateVerifydomaincontrolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CertificateVerifydomaincontrolPathParams;
}


export class CertificateVerifydomaincontrolResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

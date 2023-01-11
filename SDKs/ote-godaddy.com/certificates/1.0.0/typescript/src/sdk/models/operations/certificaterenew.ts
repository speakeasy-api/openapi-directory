import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateRenewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;
}


export class CertificateRenewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CertificateRenewPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CertificateRenewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

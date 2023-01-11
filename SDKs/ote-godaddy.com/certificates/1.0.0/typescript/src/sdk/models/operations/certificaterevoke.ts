import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateRevokePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;
}


export class CertificateRevokeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CertificateRevokePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CertificateRevokeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

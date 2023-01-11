import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateCancelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;
}


export class CertificateCancelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CertificateCancelPathParams;
}


export class CertificateCancelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

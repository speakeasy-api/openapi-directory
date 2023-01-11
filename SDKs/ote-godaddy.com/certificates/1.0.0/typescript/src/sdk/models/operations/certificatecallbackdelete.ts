import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateCallbackDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;
}


export class CertificateCallbackDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CertificateCallbackDeletePathParams;
}


export class CertificateCallbackDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

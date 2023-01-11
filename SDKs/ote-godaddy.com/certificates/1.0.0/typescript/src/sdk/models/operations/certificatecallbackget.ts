import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateCallbackGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;
}


export class CertificateCallbackGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CertificateCallbackGetPathParams;
}


export class CertificateCallbackGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateCallback?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

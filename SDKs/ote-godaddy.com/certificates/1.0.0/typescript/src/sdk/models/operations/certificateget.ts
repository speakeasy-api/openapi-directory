import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;
}


export class CertificateGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CertificateGetPathParams;
}


export class CertificateGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificate?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

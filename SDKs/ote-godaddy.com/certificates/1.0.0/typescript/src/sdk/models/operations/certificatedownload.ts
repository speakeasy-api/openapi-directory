import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateDownloadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;
}


export class CertificateDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CertificateDownloadPathParams;
}


export class CertificateDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateBundle?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

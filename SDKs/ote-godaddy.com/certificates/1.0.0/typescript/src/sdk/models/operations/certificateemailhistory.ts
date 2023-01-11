import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateEmailHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;
}


export class CertificateEmailHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CertificateEmailHistoryPathParams;
}


export class CertificateEmailHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateEmailHistory?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

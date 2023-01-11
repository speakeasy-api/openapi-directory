import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateActionRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;
}


export class CertificateActionRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CertificateActionRetrievePathParams;
}


export class CertificateActionRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arrayOfCertificateAction?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

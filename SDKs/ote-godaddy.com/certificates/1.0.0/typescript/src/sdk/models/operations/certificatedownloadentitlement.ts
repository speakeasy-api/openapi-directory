import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateDownloadEntitlementQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entitlementId" })
  entitlementId: string;
}


export class CertificateDownloadEntitlementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CertificateDownloadEntitlementQueryParams;
}


export class CertificateDownloadEntitlementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateBundle?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

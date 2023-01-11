import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateGetEntitlementQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entitlementId" })
  entitlementId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latest" })
  latest?: boolean;
}


export class CertificateGetEntitlementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CertificateGetEntitlementQueryParams;
}


export class CertificateGetEntitlementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificates?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

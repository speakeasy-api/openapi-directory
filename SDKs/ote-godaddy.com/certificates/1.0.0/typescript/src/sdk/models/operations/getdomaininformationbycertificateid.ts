import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDomainInformationByCertificateIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" })
  customerId: string;
}


export class GetDomainInformationByCertificateIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDomainInformationByCertificateIdPathParams;
}


export class GetDomainInformationByCertificateIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  domainVerificationSummaries?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}

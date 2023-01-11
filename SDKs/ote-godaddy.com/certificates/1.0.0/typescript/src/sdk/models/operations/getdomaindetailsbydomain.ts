import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDomainDetailsByDomainPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" })
  customerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domain" })
  domain: string;
}


export class GetDomainDetailsByDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDomainDetailsByDomainPathParams;
}


export class GetDomainDetailsByDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  domainVerificationDetail?: shared.DomainVerificationDetail;

  @SpeakeasyMetadata()
  statusCode: number;
}

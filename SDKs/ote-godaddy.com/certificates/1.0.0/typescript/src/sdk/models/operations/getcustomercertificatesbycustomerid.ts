import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCustomerCertificatesByCustomerIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" })
  customerId: string;
}


export class GetCustomerCertificatesByCustomerIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetCustomerCertificatesByCustomerIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomerCertificatesByCustomerIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCustomerCertificatesByCustomerIdQueryParams;
}


export class GetCustomerCertificatesByCustomerIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  certificateSummariesV2?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

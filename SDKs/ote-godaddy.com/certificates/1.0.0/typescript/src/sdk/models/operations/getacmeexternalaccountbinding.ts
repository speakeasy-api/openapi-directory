import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAcmeExternalAccountBindingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" })
  customerId: string;
}


export class GetAcmeExternalAccountBindingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAcmeExternalAccountBindingPathParams;
}


export class GetAcmeExternalAccountBindingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  externalAccountBinding?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

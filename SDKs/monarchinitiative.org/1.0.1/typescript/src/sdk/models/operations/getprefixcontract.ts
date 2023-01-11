import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPrefixContractPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uri" })
  uri: string;
}


export class GetPrefixContractRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPrefixContractPathParams;
}


export class GetPrefixContractResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

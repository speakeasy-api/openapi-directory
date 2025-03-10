import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAchFundingRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sourceAccountId" })
  sourceAccountId: string;
}


export class CreateAchFundingRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateAchFundingRequestPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.FundingRequestV1;
}


export class CreateAchFundingRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse400?: any;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse404?: any;
}

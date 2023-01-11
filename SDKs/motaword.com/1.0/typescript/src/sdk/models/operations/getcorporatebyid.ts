import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCorporateByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=corporateId" })
  corporateId: number;
}


export class GetCorporateByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCorporateByIdPathParams;
}


export class GetCorporateByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  corporateAccount?: shared.CorporateAccount;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrieveEuaByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RetrieveEuaByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveEuaByIdPathParams;
}


export class RetrieveEuaByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  endUserAgreement?: shared.EndUserAgreement;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCorporateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  corporateAccount?: shared.CorporateAccount;

  @SpeakeasyMetadata()
  statusCode: number;
}

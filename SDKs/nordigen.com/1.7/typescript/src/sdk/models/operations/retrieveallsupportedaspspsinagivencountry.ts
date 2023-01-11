import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrieveAllSupportedAspspSInAGivenCountryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;
}


export class RetrieveAllSupportedAspspSInAGivenCountryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RetrieveAllSupportedAspspSInAGivenCountryQueryParams;
}


export class RetrieveAllSupportedAspspSInAGivenCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Aspsp })
  aspsps?: shared.Aspsp[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

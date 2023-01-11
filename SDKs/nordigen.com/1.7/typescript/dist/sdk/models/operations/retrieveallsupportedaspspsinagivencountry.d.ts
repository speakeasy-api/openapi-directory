import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetrieveAllSupportedAspspSInAGivenCountryQueryParams extends SpeakeasyBase {
    country: string;
}
export declare class RetrieveAllSupportedAspspSInAGivenCountryRequest extends SpeakeasyBase {
    queryParams: RetrieveAllSupportedAspspSInAGivenCountryQueryParams;
}
export declare class RetrieveAllSupportedAspspSInAGivenCountryResponse extends SpeakeasyBase {
    aspsps?: shared.Aspsp[];
    contentType: string;
    statusCode: number;
}

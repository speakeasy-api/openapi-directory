import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DiasporaSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class DiasporaRequest extends SpeakeasyBase {
    countryIso2: string;
    firstName: string;
    lastName: string;
}
export declare class DiasporaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A diaspora / ethnicity for given name and geography.
     */
    firstLastNameDiasporaedOut?: shared.FirstLastNameDiasporaedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

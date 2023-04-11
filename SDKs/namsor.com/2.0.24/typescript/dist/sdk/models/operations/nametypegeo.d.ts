import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NameTypeGeoSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class NameTypeGeoRequest extends SpeakeasyBase {
    countryIso2: string;
    properNoun: string;
}
export declare class NameTypeGeoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A typed name.
     */
    properNounCategorizedOut?: shared.ProperNounCategorizedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

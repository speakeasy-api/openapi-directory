import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubclassificationSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class SubclassificationRequest extends SpeakeasyBase {
    countryIso2: string;
    firstName: string;
    lastName: string;
}
export declare class SubclassificationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A classified name at a sub-country level.
     */
    firstLastNameGeoSubclassificationOut?: shared.FirstLastNameGeoSubclassificationOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

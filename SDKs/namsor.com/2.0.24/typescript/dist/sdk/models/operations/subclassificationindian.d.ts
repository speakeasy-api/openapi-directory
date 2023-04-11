import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubclassificationIndianSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class SubclassificationIndianRequest extends SpeakeasyBase {
    firstName: string;
    lastName: string;
}
export declare class SubclassificationIndianResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A classified name at a sub-country level.
     */
    firstLastNameGeoSubclassificationOut?: shared.FirstLastNameGeoSubclassificationOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

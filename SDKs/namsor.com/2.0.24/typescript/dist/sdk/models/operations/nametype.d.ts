import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NameTypeSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class NameTypeRequest extends SpeakeasyBase {
    properNoun: string;
}
export declare class NameTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A typed name.
     */
    properNounCategorizedOut?: shared.ProperNounCategorizedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

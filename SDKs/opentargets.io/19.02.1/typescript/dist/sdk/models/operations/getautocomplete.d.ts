import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAutocompleteRequest extends SpeakeasyBase {
    /**
     * A full text query.
     */
    q: string;
    /**
     * Maximum amount of results to return. Defaults to 5.
     */
    size?: string;
}
export declare class GetAutocompleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

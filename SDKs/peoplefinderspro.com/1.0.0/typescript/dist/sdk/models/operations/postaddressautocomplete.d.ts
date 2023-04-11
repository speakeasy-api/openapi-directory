import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAddressAutocompleteRequestBody extends SpeakeasyBase {
    input?: string;
}
export declare class PostAddressAutocompleteRequest extends SpeakeasyBase {
    requestBody?: PostAddressAutocompleteRequestBody;
    /**
     * e.g. Key
     */
    galaxyApName?: string;
    /**
     * e.g. Secret
     */
    galaxyApPassword?: string;
    /**
     * e.g. DevAPIAddressAutoComplete
     */
    galaxySearchType?: string;
}
export declare class PostAddressAutocompleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

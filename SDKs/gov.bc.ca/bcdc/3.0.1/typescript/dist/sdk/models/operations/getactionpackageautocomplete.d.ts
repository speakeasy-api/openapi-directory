import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetActionPackageAutocompleteRequest extends SpeakeasyBase {
    /**
     * The maximum number of resource formats to return
     */
    limit?: number;
    /**
     * The string to query
     */
    q?: string;
}
export declare class GetActionPackageAutocompleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

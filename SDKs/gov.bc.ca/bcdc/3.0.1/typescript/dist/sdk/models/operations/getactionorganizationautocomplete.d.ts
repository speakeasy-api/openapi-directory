import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetActionOrganizationAutocompleteRequest extends SpeakeasyBase {
    /**
     * The maximum number of organizations to return (optional)
     */
    limit?: number;
    /**
     * The string to search for
     */
    q?: string;
}
export declare class GetActionOrganizationAutocompleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

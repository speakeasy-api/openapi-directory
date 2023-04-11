import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionT } from "./function";
/**
 * Response for the `ListFunctions` method.
 */
export declare class ListFunctionsResponse extends SpeakeasyBase {
    /**
     * The functions that match the request.
     */
    functions?: FunctionT[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached. The response does not include any functions from these locations.
     */
    unreachable?: string[];
}

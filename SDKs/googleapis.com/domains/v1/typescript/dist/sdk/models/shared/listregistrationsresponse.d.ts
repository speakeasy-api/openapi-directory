import { SpeakeasyBase } from "../../../internal/utils";
import { Registration } from "./registration";
/**
 * Response for the `ListRegistrations` method.
 */
export declare class ListRegistrationsResponse extends SpeakeasyBase {
    /**
     * When present, there are more results to retrieve. Set `page_token` to this value on a subsequent call to get the next page of results.
     */
    nextPageToken?: string;
    /**
     * A list of `Registration`s.
     */
    registrations?: Registration[];
}

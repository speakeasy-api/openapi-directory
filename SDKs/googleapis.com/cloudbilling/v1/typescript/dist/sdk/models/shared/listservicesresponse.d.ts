import { SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";
/**
 * Response message for `ListServices`.
 */
export declare class ListServicesResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results. To retrieve the next page, call `ListServices` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve.
     */
    nextPageToken?: string;
    /**
     * A list of services.
     */
    services?: Service[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";
/**
 * The ListServices response.
 */
export declare class ListServicesResponse extends SpeakeasyBase {
    /**
     * If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.
     */
    nextPageToken?: string;
    /**
     * The Services matching the specified filter.
     */
    services?: Service[];
}

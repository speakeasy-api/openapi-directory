import { SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";
/**
 * The environments in a project and location.
 */
export declare class ListEnvironmentsResponse extends SpeakeasyBase {
    /**
     * The list of environments returned by a ListEnvironmentsRequest.
     */
    environments?: Environment[];
    /**
     * The page token used to query for the next page if one exists.
     */
    nextPageToken?: string;
}

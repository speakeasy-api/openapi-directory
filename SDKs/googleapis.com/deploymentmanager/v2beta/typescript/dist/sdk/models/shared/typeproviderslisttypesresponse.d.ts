import { SpeakeasyBase } from "../../../internal/utils";
import { TypeInfo } from "./typeinfo";
/**
 * Successful response
 */
export declare class TypeProvidersListTypesResponse extends SpeakeasyBase {
    /**
     * A token used to continue a truncated list request.
     */
    nextPageToken?: string;
    /**
     * Output only. A list of resource type info.
     */
    types?: TypeInfo[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { CompositeType } from "./compositetype";
/**
 * A response that returns all Composite Types supported by Deployment Manager
 */
export declare class CompositeTypesListResponse extends SpeakeasyBase {
    /**
     * Output only. A list of resource composite types supported by Deployment Manager.
     */
    compositeTypes?: CompositeType[];
    /**
     * A token used to continue a truncated list request.
     */
    nextPageToken?: string;
}

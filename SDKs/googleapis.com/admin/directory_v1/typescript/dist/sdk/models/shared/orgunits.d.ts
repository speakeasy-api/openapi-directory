import { SpeakeasyBase } from "../../../internal/utils";
import { OrgUnit } from "./orgunit";
/**
 * Successful response
 */
export declare class OrgUnits extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * The type of the API resource. For Org Unit resources, the type is `admin#directory#orgUnits`.
     */
    kind?: string;
    /**
     * A list of organizational unit objects.
     */
    organizationUnits?: OrgUnit[];
}

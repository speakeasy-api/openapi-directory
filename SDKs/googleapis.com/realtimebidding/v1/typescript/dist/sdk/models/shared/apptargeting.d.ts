import { SpeakeasyBase } from "../../../internal/utils";
import { NumericTargetingDimension } from "./numerictargetingdimension";
import { StringTargetingDimension } from "./stringtargetingdimension";
/**
 * A subset of app inventory to target. Bid requests that match criteria in at least one of the specified dimensions will be sent.
 */
export declare class AppTargeting extends SpeakeasyBase {
    /**
     * Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting.
     */
    mobileAppCategoryTargeting?: NumericTargetingDimension;
    /**
     * Generic targeting with string values used in app, website and publisher targeting.
     */
    mobileAppTargeting?: StringTargetingDimension;
}

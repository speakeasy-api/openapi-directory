import { SpeakeasyBase } from "../../../internal/utils";
import { GroupLicense } from "./grouplicense";
/**
 * Successful response
 */
export declare class GroupLicensesListResponse extends SpeakeasyBase {
    /**
     * A group license for a product approved for use in the enterprise.
     */
    groupLicense?: GroupLicense[];
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProductStatusDestinationStatus extends SpeakeasyBase {
    /**
     * Whether the approval status might change due to further processing.
     */
    approvalPending?: boolean;
    /**
     * The destination's approval status. Acceptable values are: - "`approved`" - "`disapproved`"
     */
    approvalStatus?: string;
    /**
     * The name of the destination
     */
    destination?: string;
    /**
     * Provided for backward compatibility only. Always set to "required". Acceptable values are: - "`default`" - "`excluded`" - "`optional`" - "`required`"
     */
    intention?: string;
}

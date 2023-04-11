import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CidrBlock contains an optional name and one CIDR block.
 */
export declare class CidrBlock extends SpeakeasyBase {
    /**
     * cidr_block must be specified in CIDR notation.
     */
    cidrBlock?: string;
    /**
     * display_name is an optional field for users to identify CIDR blocks.
     */
    displayName?: string;
}

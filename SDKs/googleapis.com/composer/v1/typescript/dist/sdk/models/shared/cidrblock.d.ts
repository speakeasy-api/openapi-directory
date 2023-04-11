import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CIDR block with an optional name.
 */
export declare class CidrBlock extends SpeakeasyBase {
    /**
     * CIDR block that must be specified in CIDR notation.
     */
    cidrBlock?: string;
    /**
     * User-defined name that identifies the CIDR block.
     */
    displayName?: string;
}

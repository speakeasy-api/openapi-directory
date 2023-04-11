import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProductDestination extends SpeakeasyBase {
    /**
     * The name of the destination.
     */
    destinationName?: string;
    /**
     * Whether the destination is required, excluded or should be validated. Acceptable values are: - "`default`" - "`excluded`" - "`optional`" - "`required`"
     */
    intention?: string;
}
